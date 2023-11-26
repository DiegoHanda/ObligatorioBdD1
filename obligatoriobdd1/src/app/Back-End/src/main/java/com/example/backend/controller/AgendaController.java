package com.example.backend.controller;

import com.example.backend.model.*;
import com.example.backend.repository.AgendaRepository;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AgendaController {
  @Autowired
  private AgendaRepository agendaRepository;

  @Autowired
  private FuncionarioRepository funcionarioRepository;

  @GetMapping("/agenda")
  public List<Agenda> getSinReservar() {
    return agendaRepository.findAgendaDisponible();
  }


  @PutMapping("/agenda/{logId}")
  public ResponseEntity<String> actualizarAgenda(@RequestBody AgendaDTO agendaActualizada, @RequestParam int logId) {

    if (!funcionarioRepository.existsByLogId(logId)) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El Funcionario no existe");
    }
    AgendaId id = new AgendaId(agendaActualizada.getNro(), Date.valueOf(agendaActualizada.getFchAgenda()));
    if (agendaRepository.existsById(id)) {

      Agenda agendaExistente = agendaRepository.getById(id);
      Funcionario funcionario = funcionarioRepository.findFuncionarioByLogId(logId);

      agendaExistente.setFuncionario(funcionario);
      agendaRepository.save(agendaExistente);
      return ResponseEntity.ok("Agenda actualizada correctamente");
    } else {
      // La agenda no existe
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La agenda no existe");
    }
  }
}
