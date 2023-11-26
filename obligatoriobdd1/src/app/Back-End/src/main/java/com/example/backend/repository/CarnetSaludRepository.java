package com.example.backend.repository;

import com.example.backend.model.CarnetSalud;
import com.example.backend.model.CarnetSaludId;
import com.example.backend.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CarnetSaludRepository extends JpaRepository<CarnetSalud, CarnetSaludId> {
  CarnetSalud findByFuncionario(Funcionario funcionario);

}
