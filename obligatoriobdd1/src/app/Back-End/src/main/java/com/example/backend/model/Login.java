package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Logins")
public class Login {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "LogId")
  private int logId;

  @Column(name = "password", nullable = false)
  private String password;

  public Login() {
  }

  public Login(String password) {
    this.password = password;
  }

  public int getLogId() {
    return logId;
  }

  public void setLogId(int logId) {
    this.logId = logId;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
