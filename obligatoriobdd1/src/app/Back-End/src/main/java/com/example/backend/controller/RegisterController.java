package com.example.backend.controller;

import com.example.backend.model.FuncYPassw;
import com.example.backend.model.Funcionario;
import com.example.backend.model.Login;
import com.example.backend.repository.FuncionarioRepository;
import com.example.backend.repository.LoginRepository;
import jakarta.persistence.Tuple;
import netscape.javascript.JSObject;
import org.antlr.v4.runtime.misc.Pair;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class RegisterController {

  @Autowired
  private LoginRepository loginRepository;
  @Autowired
  private FuncionarioRepository funcionarioRepository;



  @PostMapping("/register")
  public ResponseEntity<String> registrar(@RequestBody FuncYPassw funcYPassw){
  //public ResponseEntity<String> registrar(@RequestBody arr) {
    if (loginRepository.existsByLogId(funcYPassw.getFuncionario().getLogId())) {
      return ResponseEntity.status(HttpStatus.CREATED).body("El logId ya esta ocupado");
    } else if (funcionarioRepository.existsById(funcYPassw.getFuncionario().getCi())) {

      return ResponseEntity.status(HttpStatus.CREATED).body("Ci ya registrada");
    }
    Login login1=new Login(funcYPassw.getFuncionario().getLogId(), funcYPassw.getPassword());
    loginRepository.save(login1);
    funcionarioRepository.save(funcYPassw.getFuncionario());





    //registrarlO!!!!!!!!!!!!!!!!!/
    return ResponseEntity.status(HttpStatus.CREATED).body("Registrado exitosamente");
  }


}

