package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.PeriodoActualizacion;
import com.example.backend.model.PeriodoActualizacionDTO;
import com.example.backend.repository.PeriodoActualizacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class PeriodoActualizacionController {
  @Autowired
  private PeriodoActualizacionRepository periodoActualizacionRepository;

  @GetMapping("/periodos_actualizacion")
  public List<PeriodoActualizacion> getAllPeriodosActualizacion() {
    return periodoActualizacionRepository.findAll();
  }

  @PutMapping("/periodos_actualizacion")
  public ResponseEntity<PeriodoActualizacion> modificarUltimoPeriodo(@RequestBody PeriodoActualizacionDTO pNuevo) {

    Optional<PeriodoActualizacion> optionalPeriodo = periodoActualizacionRepository.findTopByOrderByFchInicioDesc();

    if (optionalPeriodo.isPresent()) {
      PeriodoActualizacion ultimoPeriodo = optionalPeriodo.get();

      PeriodoActualizacion nuevoPeriodo = new PeriodoActualizacion(pNuevo.getAño(), pNuevo.getSemestre(), Date.valueOf(pNuevo.getFchInicio()), Date.valueOf(pNuevo.getFchFin()));
      periodoActualizacionRepository.delete(ultimoPeriodo);
      PeriodoActualizacion pModificado = periodoActualizacionRepository.save(nuevoPeriodo);

      return ResponseEntity.ok(pModificado);
    } else {
      throw new ResourceNotFoundException("No se encontró el Periodo de Actualizacion");
    }
  }

}
