package com.example.backend.controller;

import com.example.backend.model.CarnetSalud;
import com.example.backend.repository.CarnetSaludRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CarnetSaludController {
  @Autowired
  private CarnetSaludRepository carnetSaludRepository;

  @GetMapping("/carnet_salud")
  public List<CarnetSalud> getAllCarnetSalud() {
    return carnetSaludRepository.findAll();
  }

   @PostMapping("/carnet_salud")
  public Carnet crearCarnet(@RequestBody Carnet carnet) {
    return carnetSaludRepository.save(carnet);
  }
}

