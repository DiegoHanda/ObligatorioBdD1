package com.example.backend.repository;

import com.example.backend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

  @Query("SELECT COUNT(l) > 0 FROM Login l WHERE l.LogId = ?1")
  boolean existsByLogId(int logId);
  @Query("SELECT Password FROM Login  WHERE LogId = ?1")
  String findPasswordById(int lId);
}
