package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Logins")
public class Login {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "LogId")
  private int logId;

  @Column(name = "admin")
  private boolean admin;

  @Column(name = "password", nullable = false)
  private String password;

  public Login() {
  }

  public Login(boolean admin, String password) {
    this.admin = admin;
    this.password = password;
  }

  public int getLogId() {
    return logId;
  }

  public void setLogId(int logId) {
    this.logId = logId;
  }

  public boolean isAdmin() {
    return admin;
  }

  public void setAdmin(boolean admin) {
    this.admin = admin;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
