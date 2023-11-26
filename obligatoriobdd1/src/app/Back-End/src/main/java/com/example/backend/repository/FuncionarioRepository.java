package com.example.backend.repository;

import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer>{
  @Query("SELECT f FROM Funcionario f WHERE f.ci NOT IN (SELECT cs.funcionario.ci FROM CarnetSalud cs WHERE cs.fchVencimiento >= CURRENT_DATE)")
  List<Funcionario> findFuncionariosSinFormulario();

  @Query("SELECT F FROM Funcionario F INNER JOIN Login L ON F.LogId = L.LogId WHERE L.LogId = ?1")
  Funcionario findFuncionarioByLogId(int logId);

  @Query("SELECT COUNT(F) > 0 FROM Funcionario F WHERE F.ci = ?1")
  boolean existsByCi(int ci);


  @Query("SELECT COUNT(F) > 0 FROM Funcionario F WHERE F.LogId = ?1")
  boolean existsByLogId(int logId);
  Funcionario findFuncionarioByCi(int ci);
}
