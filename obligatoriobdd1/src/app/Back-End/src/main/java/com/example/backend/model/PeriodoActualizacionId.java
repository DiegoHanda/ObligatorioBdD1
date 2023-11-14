package com.example.backend.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class PeriodoActualizacionId implements Serializable {

  private int año;
  private int semestre;
  private Date fchInicio;
  private Date fchFin;

  public PeriodoActualizacionId() {
  }

  public PeriodoActualizacionId(int año, int semestre, Date fchInicio, Date fchFin) {
    this.año = año;
    this.semestre = semestre;
    this.fchInicio = fchInicio;
    this.fchFin = fchFin;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    PeriodoActualizacionId that = (PeriodoActualizacionId) o;
    return año == that.año &&
      semestre == that.semestre &&
      fchInicio.equals(that.fchInicio) &&
      fchFin.equals(that.fchFin);
  }

  @Override
  public int hashCode() {
    return Objects.hash(año, semestre, fchInicio, fchFin);
  }
}
