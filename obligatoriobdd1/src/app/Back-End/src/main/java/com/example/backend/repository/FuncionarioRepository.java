package com.example.backend.repository;

import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer>{
  @Query("SELECT f FROM Funcionario f WHERE f.ci NOT IN (SELECT cs.funcionario.ci FROM CarnetSalud cs WHERE cs.fchVencimiento >= CURRENT_DATE)")
  List<Funcionario> findFuncionariosSinFormulario();

}
