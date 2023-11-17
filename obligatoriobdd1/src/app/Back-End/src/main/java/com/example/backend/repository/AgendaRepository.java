package com.example.backend.repository;

import com.example.backend.model.Agenda;
import com.example.backend.model.AgendaId;
import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, AgendaId> {

  @Query("SELECT Funcionario FROM Funcionario  WHERE ci = ?1")
  Funcionario findFuncionarioByCi(int ci);
}
