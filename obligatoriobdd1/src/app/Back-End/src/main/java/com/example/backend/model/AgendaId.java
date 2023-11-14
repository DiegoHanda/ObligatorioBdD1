package com.example.backend.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class AgendaId implements Serializable {

  private int nro;
  private Funcionario funcionario;
  private Date fchAgenda;

  // Constructors, equals, and hashCode

  public AgendaId() {
  }

  public AgendaId(int nro, Funcionario funcionario, Date fchAgenda) {
    this.nro = nro;
    this.funcionario = funcionario;
    this.fchAgenda = fchAgenda;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    AgendaId agendaId = (AgendaId) o;
    return nro == agendaId.nro &&
      funcionario.equals(agendaId.funcionario) &&
      fchAgenda.equals(agendaId.fchAgenda);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nro, funcionario, fchAgenda);
  }
}
