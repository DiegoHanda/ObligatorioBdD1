package com.example.backend.controller;

import com.example.backend.model.Agenda;
import com.example.backend.repository.AgendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AgendaController {
  @Autowired
  private AgendaRepository agendaRepository;

  @GetMapping("/agenda")
  public List<Agenda> getAllAgenda() {
    return agendaRepository.findAll();
  }
}
