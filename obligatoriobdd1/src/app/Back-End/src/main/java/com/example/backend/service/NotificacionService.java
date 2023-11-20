package com.example.backend.service;

import com.example.backend.model.Funcionario;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NotificacionService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private EmailService emailService;

    @Scheduled(cron = "0 0/1 * * * ?")
    public void notificarFuncionariosSinFormulario() {
      System.out.println("Hola");

      try {
        List<Funcionario> funcionariosSinFormulario = funcionarioRepository.findFuncionariosSinFormulario();
        System.out.println("Número de funcionarios sin formulario: " + funcionariosSinFormulario.size());

        for (Funcionario funcionario : funcionariosSinFormulario) {
          System.out.println(funcionario.getnombreCompleto());
          String mensaje = "Estimado " + funcionario.getnombreCompleto() + ", por favor complete su formulario.";
          emailService.enviarCorreo(funcionario.getEmail(), "Recordatorio de formulario", mensaje);
        }
      } catch (Exception e) {
        e.printStackTrace();
      }
    }
}
