package com.example.backend.controller;

import com.example.backend.model.CarnetSalud;
import com.example.backend.model.Funcionario;
import com.example.backend.repository.CarnetSaludRepository;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CarnetSaludController {
  @Autowired
  private CarnetSaludRepository carnetSaludRepository;
  @Autowired
  private FuncionarioRepository funcionarioRepository;

  @GetMapping("/carnet_salud")
  public List<CarnetSalud> getAllCarnetSalud() {
    return carnetSaludRepository.findAll();
  }
  @GetMapping("/carnet_salud/{CI}")
  public CarnetSalud getCarnetByCI(@PathVariable("CI") int CI){
    Funcionario funcionario=funcionarioRepository.findFuncionarioByCi(CI);//CAMBIAR A POR CI
    CarnetSalud cS= carnetSaludRepository.findByFuncionario(funcionario);
    if (cS != null) {
      return cS;
    } else {
      return null;
    }
  }

  @PostMapping("/carnet_salud")
  public CarnetSalud crearCarnet(@RequestBody CarnetSalud funcionario) {
    return carnetSaludRepository.save(funcionario);
  }



}

