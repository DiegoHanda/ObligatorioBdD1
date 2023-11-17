package com.example.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "Agenda")
@IdClass(AgendaId.class)
public class AgendaDTO implements Serializable {

  @Id
  @Column(name = "Nro")
  private int nro;

  @ManyToOne
  @JoinColumn(name = "Ci", nullable = false)
  private Funcionario funcionario;

  @Id
  @Column(name = "Fch_Agenda")
  @Temporal(TemporalType.DATE)
  private LocalDate fchAgenda;

  // Constructors, getters, and setters

  // Default constructor
  public AgendaDTO() {
  }

  // Constructor without Fch_Agenda
  public AgendaDTO(int nro, Funcionario funcionario) {
    this.nro = nro;
    this.funcionario = funcionario;
  }

  // Constructor with Fch_Agenda
  public AgendaDTO(int nro, Funcionario funcionario, LocalDate fchAgenda) {
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

  public LocalDate getFchAgenda() {
    return fchAgenda;
  }

  public void setFchAgenda(LocalDate fchAgenda) {
    this.fchAgenda = fchAgenda;
  }
}
