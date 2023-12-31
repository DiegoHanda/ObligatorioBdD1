package com.example.backend.service;
import com.example.backend.model.Funcionario;
import com.example.backend.model.Login;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCrypt;


@Service
public class EncryptServiceIMPLEMENT implements EncryptService{
  @Autowired
  private LoginRepository loginRepository;
  @Override
  public String encryptPassword(String password) {
    return BCrypt.hashpw(password,BCrypt.gensalt());
  }

  @Override
  public Boolean verifyPassworf(String OGPassword, String hashPassword) {

    return BCrypt.checkpw(OGPassword,hashPassword);
  }
  public Login saveLoginHashed(Login newLogin){
    Login hLogin=new Login(newLogin.getLogId(),this.encryptPassword(newLogin.getPassword()) );
    System.out.println("LA PS es:"+ hLogin.getPassword());
    return this.loginRepository.save(hLogin);
  }
}
