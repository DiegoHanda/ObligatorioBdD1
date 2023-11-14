package com.example.backend.controller;

import com.example.backend.model.PeriodoActualizacion;
import com.example.backend.repository.PeriodoActualizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PeriodoActualizacionController {
  @Autowired
  private PeriodoActualizacionRepository periodoActualizacionRepository;

  @GetMapping("/periodos_actualizacion")
  public List<PeriodoActualizacion> getAllPeriodosActualizacion() {
    return periodoActualizacionRepository.findAll();
  }
}
