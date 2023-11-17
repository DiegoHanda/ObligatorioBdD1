package com.example.backend.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class AgendaId implements Serializable {

  private int nro;
  private Date fchAgenda;

  // Constructors, equals, and hashCode

  public AgendaId() {
  }

  public AgendaId(int nro, Date fchAgenda) {
    this.nro = nro;
    this.fchAgenda = fchAgenda;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    AgendaId agendaId = (AgendaId) o;
    return nro == agendaId.nro &&
      fchAgenda.equals(agendaId.fchAgenda);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nro, fchAgenda);
  }
}
