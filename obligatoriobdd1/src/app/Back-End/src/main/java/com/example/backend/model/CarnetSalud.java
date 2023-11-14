package com.example.backend.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Carnet_Salud")
@IdClass(CarnetSaludId.class)
public class CarnetSalud implements Serializable {

  @Id
  @ManyToOne
  @JoinColumn(name = "Ci", nullable = false)
  private Funcionario funcionario;

  @Id
  @Column(name = "Fch_Emision")
  @Temporal(TemporalType.DATE)
  private Date fchEmision;

  @Column(name = "Fch_Vencimiento")
  @Temporal(TemporalType.DATE)
  private Date fchVencimiento;

  @Column(name = "Comprobante", nullable = false)
  private String comprobante;

  // Constructors, getters, and setters

  // Default constructor
  public CarnetSalud() {
  }

  // Constructor
  public CarnetSalud(Funcionario funcionario, Date fchEmision, Date fchVencimiento, String comprobante) {
    this.funcionario = funcionario;
    this.fchEmision = fchEmision;
    this.fchVencimiento = fchVencimiento;
    this.comprobante = comprobante;
  }

  // Getters and setters

  public Funcionario getFuncionario() {
    return funcionario;
  }

  public void setFuncionario(Funcionario funcionario) {
    this.funcionario = funcionario;
  }

  public Date getFchEmision() {
    return fchEmision;
  }

  public void setFchEmision(Date fchEmision) {
    this.fchEmision = fchEmision;
  }

  public Date getFchVencimiento() {
    return fchVencimiento;
  }

  public void setFchVencimiento(Date fchVencimiento) {
    this.fchVencimiento = fchVencimiento;
  }

  public String getComprobante() {
    return comprobante;
  }

  public void setComprobante(String comprobante) {
    this.comprobante = comprobante;
  }
}
