package com.example.backend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Periodos_Actualizacion")
@IdClass(PeriodoActualizacionId.class)
public class PeriodoActualizacion {

  @Id
  @Column(name = "Año")
  private int año;

  @Id
  @Column(name = "Semestre")
  private int semestre;

  @Id
  @Column(name = "Fch_Inicio")
  @Temporal(TemporalType.DATE)
  private Date fchInicio;

  @Id
  @Column(name = "Fch_Fin")
  @Temporal(TemporalType.DATE)
  private Date fchFin;

  public PeriodoActualizacion() {
  }

  public PeriodoActualizacion(int año, int semestre, Date fchInicio, Date fchFin) {
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

  public Date getFchInicio() {
    return fchInicio;
  }

  public void setFchInicio(Date fchInicio) {
    this.fchInicio = fchInicio;
  }

  public Date getFchFin() {
    return fchFin;
  }

  public void setFchFin(Date fchFin) {
    this.fchFin = fchFin;
  }
}
