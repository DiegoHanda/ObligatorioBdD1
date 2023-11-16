package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
  public boolean postLogin(@RequestBody Login Login){
    System.out.println(loginRepository.findLogById(2));

    Login fromdb= new Login();
    return true;
  }
}

