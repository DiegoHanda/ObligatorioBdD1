create database ucucarnet;
use ucucarnet;

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
    Ci int,
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

INSERT INTO Logins (LogId, password)
VALUES
    (1, 'diego11'),
    (2, 'fran19'),
    (3, 'alepicca');

-- Insert data into Funcionarios table
INSERT INTO Funcionarios (Ci, Nombre, Apellido, Fch_Nacimiento, Dirección, Teléfono, Email, LogId)
VALUES
    (123, 'Diego', 'Handalian', '2023-11-15', 'Comandante Braga', '+598 1322', 'diego.h@gmail.com', 1),
    (456, 'Francisco', 'Cabarcos', '2023-08-23', 'Gral Urquiza', '+598 321', 'francisco.c@gmail.com', 2),
    (789, 'Alejandro', 'Piccardo', '2023-07-16', 'Estero Bellaco', '+598 43121', 'alejandro.p@gmail.com', 3);

INSERT INTO Agenda (Nro, Ci, Fch_Agenda)
VALUES
    (1, 123, '2023-11-20'),
    (2, 456, '2023-11-21'),
    (3, 789, '2023-11-22');

INSERT INTO Carnet_Salud (Ci, Fch_Emision, Fch_Vencimiento, Comprobante)
VALUES
    (123, '2023-11-01', '2024-11-01', 'Comprobante1'),
    (456, '2023-11-02', '2024-11-02', 'Comprobante2'),
    (789, '2023-11-03', '2024-11-03', 'Comprobante3');

