create database OBLIGATORIOBdD1;
use OBLIGATORIOBdD1;

create table Logins (
    LogId int PRIMARY KEY,
    password varchar(255) NOT NULL
);

create table Funcionarios (
    Ci int PRIMARY KEY,
    Nombre varchar(50) NOT NULL,
    Apellido varchar(50) NOT NULL,
    Fch_Nacimiento date NOT NULL,
    Dirección varchar(255) NOT NULL,
    Teléfono varchar(20) NOT NULL,
    Email varchar(100) NOT NULL,
    LogId int NOT NULL,
    FOREIGN KEY (LogId) REFERENCES Logins (LogId)
);

CREATE TABLE Agenda (
    Nro int,
    Ci int NOT NULL,
    FOREIGN KEY (Ci) REFERENCES Funcionarios (Ci),
    Fch_Agenda date,
    PRIMARY KEY (Nro, Fch_Agenda)
);

CREATE TABLE Carnet_Salud (
    Ci int,  -- ¿Cual es la PRIMARY KEY?
    FOREIGN KEY (Ci) REFERENCES Funcionarios (Ci),
    Fch_Emision date NOT NULL,
    Fch_Vencimiento date NOT NULL,
    Comprobante varchar(255) NOT NULL,
    PRIMARY KEY (Ci, Fch_Emision)
);

CREATE TABLE Periodos_Actualizacion (
    Año int,
    Semestre int,
    Fch_Inicio date,
    Fch_Fin date,
    PRIMARY KEY (Año, Semestre, Fch_Inicio, Fch_Fin)
);

INSERT INTO Periodos_Actualizacion (Año, Semestre, Fch_Inicio, Fch_Fin)
VALUES (2023, 2, '2023-11-01', '2023-11-15');
