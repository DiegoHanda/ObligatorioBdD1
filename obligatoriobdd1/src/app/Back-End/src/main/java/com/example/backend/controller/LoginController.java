package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
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
  public boolean postLogin(@RequestBody Login login){
    //System.out.println(login.getLogId());
    String passwFromdb= loginRepository.findPasswordById(login.getLogId());
    String inputPassw=login.getPassword();
    //Login fromdb= new Login();
    //return true;
    return passwFromdb.equals(inputPassw);
  }
}

