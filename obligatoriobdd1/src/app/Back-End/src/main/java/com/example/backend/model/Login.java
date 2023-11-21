package com.example.backend.model;

import com.example.backend.repository.LoginRepository;
import com.example.backend.service.EncryptService;
import com.example.backend.service.EncryptServiceIMPLEMENT;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


@Entity
@Table(name = "Logins")
public class Login {
  /*
  @Autowired
  private LoginRepository loginRepository;
*/

  @Id
  @Column(name = "LogId")
  private int LogId;

  @Column(name = "Password", nullable = false)
  private String Password;

  public Login() {
  }

  public Login(int LogId, String Password) {
    EncryptServiceIMPLEMENT encryptServiceIMPLEMENT=new EncryptServiceIMPLEMENT();
    String hashPassw= encryptServiceIMPLEMENT.encryptPassword(Password);
    System.out.println(LogId);
    this.LogId = LogId;
    //this.Password=Password;
    this.Password = encryptServiceIMPLEMENT.encryptPassword(Password);
    System.out.println("LA CONTRASEÑA HASHEADA ES "+this.getPassword());
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
