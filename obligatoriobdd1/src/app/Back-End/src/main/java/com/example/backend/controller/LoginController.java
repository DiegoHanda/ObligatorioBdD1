package com.example.backend.controller;

import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class LoginController {
  @Autowired
  private LoginRepository loginRepository;

  @GetMapping("/logins")
  public List<Login> getAllLogins() {
    return loginRepository.findAll();
  }
}
