package com.example.backend.controller;

import com.example.backend.model.Funcionario;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class FuncionarioController {
  @Autowired
  private FuncionarioRepository funcionarioRepository;

  //Get todos los funcionarios
  @GetMapping("/funcionarios")
  public List<Funcionario> getAllFuncionarios() {
    return funcionarioRepository.findAll();
  }

  @PostMapping("/funcionarios")
  public Funcionario crearFuncionario(@RequestBody Funcionario funcionario) {
    return funcionarioRepository.save(funcionario);
  }

}
