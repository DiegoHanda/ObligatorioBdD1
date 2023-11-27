package com.example.backend.repository;

import com.example.backend.model.PeriodoActualizacion;
import com.example.backend.model.PeriodoActualizacionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PeriodoActualizacionRepository extends JpaRepository<PeriodoActualizacion, PeriodoActualizacionId> {
  Optional<PeriodoActualizacion> findTopByOrderByFchInicioDesc();


}
