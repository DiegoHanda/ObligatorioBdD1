package com.example.backend.repository;

import com.example.backend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

  @Query("SELECT password FROM Login  WHERE logId = ?1")
  String findPasswordById(int lId);
}
