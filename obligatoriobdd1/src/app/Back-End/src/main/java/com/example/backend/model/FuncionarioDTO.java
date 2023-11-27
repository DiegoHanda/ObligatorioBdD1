package com.example.backend.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "Funcionarios")
public class FuncionarioDTO {

  @Id
  @Column(name = "Ci")
  private Integer ci;

  @Column(name = "nombreCompleto")
  private String nombreCompleto;
  @Column(name = "Fch_Nacimiento")
  @Temporal(TemporalType.DATE)
  private LocalDate fchNacimiento;

  @Column(name = "Dirección")
  private String direccion;

  @Column(name = "Teléfono")
  private String telefono;

  @Column(name = "Email")
  private String email;

  @Column(name = "LogId")
  private Integer LogId;

  public FuncionarioDTO() {
  }

  public FuncionarioDTO(Integer ci, String nombreCompleto, LocalDate fchNacimiento,
                        String direccion, String telefono, String email, Integer logId) {
    super();
    this.ci = ci;
    this.nombreCompleto = nombreCompleto;
    this.fchNacimiento = fchNacimiento;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.LogId = logId;
  }


  public int getCi() {
    return ci;
  }

  public void setCi(int ci) {
    this.ci = ci;
  }

  public String getnombreCompleto() {
    return nombreCompleto;
  }

  public void setnombreCompleto(String nombreCompleto) {
    this.nombreCompleto = nombreCompleto;
  }

  public LocalDate getFchNacimiento() {
    return fchNacimiento;
  }

  public void setFchNacimiento(LocalDate fchNacimiento) {
    this.fchNacimiento = fchNacimiento;
  }

  public String getDireccion() {
    return direccion;
  }

  public void setDireccion(String direccion) {
    this.direccion = direccion;
  }

  public String getTelefono() {
    return telefono;
  }

  public void setTelefono(String telefono) {
    this.telefono = telefono;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Integer getLogId() {
    return LogId;
  }

  public void setLogId(Integer logId) {
    this.LogId = logId;
  }
}
