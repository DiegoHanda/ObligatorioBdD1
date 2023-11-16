package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LoginController {
  @Autowired
  private LoginRepository loginRepository;

  @GetMapping("/login")
  public List<Login> getAllLogins() {
    return loginRepository.findAll();
  }

  @PostMapping("/login")
  public ResponseEntity<Login> crearLogin(@RequestBody Login login) {
    if (loginRepository.existsByLogId(login.getLogId())) {
      // If the login already exists, return a response indicating conflict
      return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    // If the login does not exist, save and return the created login
    Login createdLogin = loginRepository.save(login);
    return ResponseEntity.status(HttpStatus.CREATED).body(createdLogin);
  }
  /*@PostMapping("/login")
  public boolean postLogin(@RequestBody Login login){
    if (loginRepository.existsByLogId(login.getLogId())){
      String passwFromDb = loginRepository.findPasswordById(login.getLogId());
      String inputPassw = login.getPassword();
      return inputPassw.equals(passwFromDb);
    }
    return false;
  }*/
}

