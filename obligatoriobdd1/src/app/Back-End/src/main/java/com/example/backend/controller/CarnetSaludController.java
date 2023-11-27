package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.CarnetSalud;
import com.example.backend.model.Funcionario;
import com.example.backend.model.PeriodoActualizacion;
import com.example.backend.model.PeriodoActualizacionDTO;
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


import java.sql.Date;
import java.util.List;
import java.util.Optional;

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
  public CarnetSalud getCarnetByCI(@PathVariable("CI") int CI) {
    Funcionario funcionario = funcionarioRepository.findFuncionarioByCi(CI);//CAMBIAR A POR CI
    CarnetSalud cS = carnetSaludRepository.findByFuncionario(funcionario);
    if (cS != null) {
      return cS;
    } else {
      return null;
    }
  }

  @PostMapping("/carnet_salud/{logId}")
  public CarnetSalud crearCarnet(@RequestBody CarnetSalud cS, @PathVariable("logId") int logId) {
    Funcionario funcionario = funcionarioRepository.findFuncionarioByLogId(logId);
    cS.setFuncionario(funcionario);
    return carnetSaludRepository.save(cS);
  }

  @PutMapping("/carnet_salud")
  public ResponseEntity<CarnetSalud> modificarCarnet(@RequestBody CarnetSalud pNuevo) {
    CarnetSalud cS = carnetSaludRepository.findByFuncionario(pNuevo.getFuncionario());
    if (cS != null) {
      cS.setFchVencimiento(pNuevo.getFchVencimiento());
      cS.setComprobante(pNuevo.getComprobante());
      carnetSaludRepository.save(cS);
      return new ResponseEntity<CarnetSalud>(cS, HttpStatus.CREATED);
    } else {
      return new ResponseEntity<CarnetSalud>(HttpStatus.CONFLICT);
    }
  }


}

