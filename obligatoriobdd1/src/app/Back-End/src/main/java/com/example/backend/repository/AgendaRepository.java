package com.example.backend.repository;

import com.example.backend.model.Agenda;
import com.example.backend.model.AgendaId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, AgendaId> {
}
