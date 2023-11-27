package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.repository.FuncionarioRepository;
import com.example.backend.repository.LoginRepository;
import com.example.backend.service.EncryptServiceIMPLEMENT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LoginController {

@Autowired
private EncryptServiceIMPLEMENT encryptServiceIMPLEMENT;
  @Autowired
  private LoginRepository loginRepository;

  @GetMapping("/login")
  public List<Login> getAllLogins() {
    return loginRepository.findAll();
  }

  @PostMapping("/login")
  public ResponseEntity<Login> crearLogin(@RequestBody Login login) {
    if (loginRepository.existsByLogId(login.getLogId())) {
      System.out.println("SE INTENTO CREAR UN LOGIN CON LOGID YA REGISTRADA!");
      return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }
    Login createdLogin = encryptServiceIMPLEMENT.saveLoginHashed(login);

    return ResponseEntity.status(HttpStatus.CREATED).body(createdLogin);
  }

  @PostMapping("/loggear")
  public boolean iniciarSesion (@RequestBody Login login){
    if (loginRepository.existsByLogId(login.getLogId())){
      String passwFromDb = loginRepository.findPasswordById(login.getLogId());
      String inputPassw = login.getPassword();
      return inputPassw.equals(passwFromDb);
    }
    return false;
  }
  @PostMapping("/loggear/Admin")
  public boolean iniciarSesionAdmin (@RequestBody Login login){
    if (login.getLogId()==0){
      String passwFromDb = loginRepository.findPasswordById(login.getLogId());
      String inputPassw = login.getPassword();
      return inputPassw.equals(passwFromDb);
    }
    return false;
  }

  @GetMapping("/login/exists/{logid}")
  public Boolean checkLogId(@PathVariable("logid") int logid) {
    boolean result = loginRepository.existsByLogId(logid);
    return result;
  }
}

