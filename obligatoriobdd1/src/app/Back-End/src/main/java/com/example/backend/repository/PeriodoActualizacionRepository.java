package com.example.backend.repository;

import com.example.backend.model.PeriodoActualizacion;
import com.example.backend.model.PeriodoActualizacionId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeriodoActualizacionRepository extends JpaRepository<PeriodoActualizacion, PeriodoActualizacionId> {
}
