package com.example.backend.service;

import com.example.backend.model.Login;

public interface EncryptService {
  String encryptPassword(String password);
  Boolean verifyPassworf(String OGPassword, String hashPassword);
  Login saveLoginHashed(Login newLogin);
}
