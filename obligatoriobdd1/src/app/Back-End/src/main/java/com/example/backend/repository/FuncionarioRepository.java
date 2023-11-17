package com.example.backend.repository;

import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer>{

  @Query("SELECT F FROM Funcionario F INNER JOIN Login L ON F.LogId = L.LogId WHERE L.LogId = ?1")
  Funcionario findFuncionarioByLogId(int logId);

  @Query("SELECT COUNT(F) > 0 FROM Funcionario F WHERE F.LogId = ?1")
  boolean existsByLogId(int logId);
}
