package com.example.backend.controller;

import com.example.backend.model.Funcionario;
import com.example.backend.repository.FuncionarioRepository;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class FuncionarioController {
  @Autowired
  private FuncionarioRepository funcionarioRepository;
  @Autowired
  private LoginRepository loginRepository;

  //Get todos los funcionarios
  @GetMapping("/funcionarios")
  public List<Funcionario> getAllFuncionarios() {
    return funcionarioRepository.findAll();
  }
  @GetMapping("funcionarios/{CI}")
  public Funcionario getFuncionarioByCI(@PathVariable("CI")int CI){
    return funcionarioRepository.findFuncionarioByCi(CI);
  }
  @PostMapping("/funcionarios")
  public Funcionario crearFuncionario(@RequestBody Funcionario funcionario) {
    if( loginRepository.existsByLogId(funcionario.getLogId())){

    }

    return funcionarioRepository.save(funcionario);
  }


}
