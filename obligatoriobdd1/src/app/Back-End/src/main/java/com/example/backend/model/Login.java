package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Logins")
public class Login {

  @Id
  @Column(name = "LogId")
  private int LogId;

  @Column(name = "Password", nullable = false)
  private String Password;

  public Login() {
  }

  public Login(int LogId, String Password) {
    System.out.println(LogId);
    this.LogId = LogId;
    this.Password = Password;
  }

  public int getLogId() {
    return LogId;
  }

  public void setLogId(int LogId) {
    this.LogId = LogId;
  }

  public String getPassword() {
    return Password;
  }

  public void setPassword(String Password) {
    this.Password = Password;
  }

}
