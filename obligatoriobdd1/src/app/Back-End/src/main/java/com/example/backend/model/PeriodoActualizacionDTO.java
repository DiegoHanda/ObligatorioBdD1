package com.example.backend.model;

import java.time.LocalDate;

public class PeriodoActualizacionDTO {

  private int año;

  private int semestre;

  private LocalDate fchInicio;

  private LocalDate fchFin;

  public PeriodoActualizacionDTO() {
  }

  public PeriodoActualizacionDTO(int año, int semestre, LocalDate fchInicio, LocalDate fchFin) {
    this.año = año;
    this.semestre = semestre;
    this.fchInicio = fchInicio;
    this.fchFin = fchFin;
  }

  public int getAño() {
    return año;
  }

  public void setAño(int año) {
    this.año = año;
  }

  public int getSemestre() {
    return semestre;
  }

  public void setSemestre(int semestre) {
    this.semestre = semestre;
  }

  public LocalDate getFchInicio() {
    return fchInicio;
  }

  public void setFchInicio(LocalDate fchInicio) {
    this.fchInicio = fchInicio;
  }

  public LocalDate getFchFin() {
    return fchFin;
  }

  public void setFchFin(LocalDate fchFin) {
    this.fchFin = fchFin;
  }
}
