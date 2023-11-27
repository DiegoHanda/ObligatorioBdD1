package com.example.backend.controller;

import com.example.backend.model.Funcionario;
import com.example.backend.model.FuncionarioDTO;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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

  @GetMapping("funcionarios/{CI}")
  public Funcionario getFuncionarioByCI(@PathVariable("CI") int CI) {
    return funcionarioRepository.findFuncionarioByCi(CI);
  }

  @PostMapping("/funcionarios")
  public Funcionario crearFuncionario(@RequestBody FuncionarioDTO funcionario) {
    if (funcionarioRepository.existsByCi(funcionario.getCi())) {
      System.out.println("Ci en uso");
      return null;
    }
    System.out.println("Ci disponible");
    Funcionario nuevoFuncionario = new Funcionario(funcionario.getCi(), funcionario.getnombreCompleto(), Date.valueOf(funcionario.getFchNacimiento()), funcionario.getDireccion(), funcionario.getTelefono(), funcionario.getEmail(), funcionario.getLogId());
    return funcionarioRepository.save(nuevoFuncionario);
  }

  @GetMapping("funcionarios/exists/{CI}")
  public Boolean checkFuncionarioByCI(@PathVariable("CI") int CI) {
    return funcionarioRepository.existsByCi(CI);
  }


}
