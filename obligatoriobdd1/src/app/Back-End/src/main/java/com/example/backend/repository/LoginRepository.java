package com.example.backend.repository;

import com.example.backend.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.data.jpa.repository.Modifying;

import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {


  @Transactional
  @Modifying
  @Query("DELETE FROM Login l WHERE l.LogId = :logId")
  void eliminarPorLogID(int logId);


  @Query("SELECT COUNT(l) > 0 FROM Login l WHERE l.LogId = ?1")
  boolean existsByLogId(int logId);

  @Query("SELECT Password FROM Login  WHERE LogId = ?1")
  String findPasswordById(int lId);
}
