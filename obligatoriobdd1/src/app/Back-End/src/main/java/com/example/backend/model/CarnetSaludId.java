package com.example.backend.model;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class CarnetSaludId implements Serializable {

  private Funcionario funcionario;
  private Date fchEmision;

  // Constructors, equals, and hashCode

  public CarnetSaludId() {
  }

  public CarnetSaludId(Funcionario funcionario, Date fchEmision) {
    this.funcionario = funcionario;
    this.fchEmision = fchEmision;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    CarnetSaludId that = (CarnetSaludId) o;
    return funcionario.equals(that.funcionario) &&
      fchEmision.equals(that.fchEmision);
  }

  @Override
  public int hashCode() {
    return Objects.hash(funcionario, fchEmision);
  }
}
