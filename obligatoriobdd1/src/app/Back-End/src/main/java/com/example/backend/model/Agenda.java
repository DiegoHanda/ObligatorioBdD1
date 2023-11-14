package com.example.backend.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Agenda")
@IdClass(AgendaId.class)
public class Agenda implements Serializable {

  @Id
  @Column(name = "Nro")
  private int nro;

  @Id
  @ManyToOne
  @JoinColumn(name = "Ci", nullable = false)
  private Funcionario funcionario;

  @Id
  @Column(name = "Fch_Agenda")
  @Temporal(TemporalType.DATE)
  private Date fchAgenda;

  // Constructors, getters, and setters

  // Default constructor
  public Agenda() {
  }

  // Constructor without Fch_Agenda
  public Agenda(int nro, Funcionario funcionario) {
    this.nro = nro;
    this.funcionario = funcionario;
  }

  // Constructor with Fch_Agenda
  public Agenda(int nro, Funcionario funcionario, Date fchAgenda) {
    this(nro, funcionario);
    this.fchAgenda = fchAgenda;
  }

  // Getters and setters

  public int getNro() {
    return nro;
  }

  public void setNro(int nro) {
    this.nro = nro;
  }

  public Funcionario getFuncionario() {
    return funcionario;
  }

  public void setFuncionario(Funcionario funcionario) {
    this.funcionario = funcionario;
  }

  public Date getFchAgenda() {
    return fchAgenda;
  }

  public void setFchAgenda(Date fchAgenda) {
    this.fchAgenda = fchAgenda;
  }
}
