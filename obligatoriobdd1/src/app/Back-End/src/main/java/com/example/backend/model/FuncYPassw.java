package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;

import java.util.Date;

public class FuncYPassw {
  @Getter
  private Integer ci;

  @Getter
  private String nombreCompleto;

 @Getter
  private Date fchNacimiento;

  @Getter
  private String direccion;

  @Getter
  private String telefono;

  @Getter
  private String email;

  @Getter
  private Integer LogId;
  @Getter
  private String password;
  @Getter
  private Funcionario funcionario;
  @Getter
  private int logId;
  public FuncYPassw(Integer ci, String nombreCompleto, Date fchNacimiento,
                    String direccion, String telefono, String email, Integer logId,String password){
    this.password=password;

    this.ci = ci;
    this.nombreCompleto = nombreCompleto;
    this.fchNacimiento = fchNacimiento;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.LogId = logId;
    this.funcionario=new Funcionario(this.ci,this.nombreCompleto,this.fchNacimiento,this.direccion,this.telefono,this.email,this.LogId);
  }

}
