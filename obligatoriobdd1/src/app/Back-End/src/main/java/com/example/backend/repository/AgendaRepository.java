package com.example.backend.repository;

import com.example.backend.model.Agenda;
import com.example.backend.model.AgendaId;
import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, AgendaId> {

  @Query("SELECT Funcionario FROM Funcionario  WHERE ci = ?1")
  Funcionario findFuncionarioByCi(int ci);

  @Query("SELECT a FROM Agenda a WHERE a.funcionario.ci = 0")
  List<Agenda> findAgendaDisponible();
}
