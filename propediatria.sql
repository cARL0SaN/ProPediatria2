-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2024 a las 04:48:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `propediatria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acceso`
--

CREATE TABLE `acceso` (
  `Persona_idPersona` int(11) NOT NULL,
  `clave_acce` varchar(20) NOT NULL,
  `fk_id_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `acceso`
--

INSERT INTO `acceso` (`Persona_idPersona`, `clave_acce`, `fk_id_estado`) VALUES
(1, '87654321', 1),
(2, 'asdfghjk', 1),
(3, '12345678', 1),
(4, '12345678', 1),
(100, '12345678', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudiente`
--

CREATE TABLE `acudiente` (
  `Persona_idPersona` int(11) NOT NULL,
  `fk_id_vinculo` int(11) NOT NULL,
  `direccion_acudiente` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `acudiente`
--

INSERT INTO `acudiente` (`Persona_idPersona`, `fk_id_vinculo`, `direccion_acudiente`) VALUES
(100, 4, NULL),
(101, 3, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id_estado` int(11) NOT NULL,
  `nom_estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id_estado`, `nom_estado`) VALUES
(0, 'Inactivo'),
(1, 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `idPaciente_idPersona` int(11) NOT NULL,
  `sexo_paciente` enum('M','F') DEFAULT NULL,
  `Pediatra_idPediatra_idPersona` int(11) NOT NULL,
  `Acudiente_Persona_idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`idPaciente_idPersona`, `sexo_paciente`, `Pediatra_idPediatra_idPersona`, `Acudiente_Persona_idPersona`) VALUES
(1000, 'F', 1, 100),
(1001, 'M', 1, 100),
(1002, 'M', 1, 101);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_has_acudiente`
--

CREATE TABLE `paciente_has_acudiente` (
  `Paciente_idPaciente_idPersona` int(11) NOT NULL,
  `Padre_idPadre_idPersona` int(11) NOT NULL,
  `observacionViculo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente_padre`
--

CREATE TABLE `paciente_padre` (
  `Paciente_idPaciente_idPersona` int(11) NOT NULL,
  `Padre_idPadre_idPersona` int(11) NOT NULL,
  `observacionViculo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paciente_padre`
--

INSERT INTO `paciente_padre` (`Paciente_idPaciente_idPersona`, `Padre_idPadre_idPersona`, `observacionViculo`) VALUES
(1000, 10004, 'Padre'),
(1001, 10006, 'Padre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `padre`
--

CREATE TABLE `padre` (
  `profesion_padre` varchar(100) DEFAULT NULL,
  `idAcudiente_idPersona` int(11) NOT NULL,
  `fk_id_vinculo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `padre`
--

INSERT INTO `padre` (`profesion_padre`, `idAcudiente_idPersona`, `fk_id_vinculo`) VALUES
('0', 10003, 1),
('0', 10004, 1),
('0', 10006, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pediatra`
--

CREATE TABLE `pediatra` (
  `idPediatra_idPersona` int(11) NOT NULL,
  `sexo_pediatra` enum('M','F') DEFAULT NULL,
  `lugarLabora_pediatra` varchar(50) DEFAULT NULL,
  `foto_pediatra` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pediatra`
--

INSERT INTO `pediatra` (`idPediatra_idPersona`, `sexo_pediatra`, `lugarLabora_pediatra`, `foto_pediatra`) VALUES
(1, 'M', 'Sanida militar', '../uploads/burger_sandwich_PNG96766.png'),
(2, 'M', 'SENA', 'uploads/pediatria.jpg'),
(3, 'M', 'SENA', 'uploads/vacunacion.avif'),
(4, 'M', 'Amazonia', '../uploads/ped_fondo.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `idPersona` int(11) NOT NULL,
  `nom_persona` varchar(50) DEFAULT NULL,
  `ape_persona` varchar(50) DEFAULT NULL,
  `correo_persona` varchar(60) DEFAULT NULL,
  `telefono_persona` varchar(15) DEFAULT NULL,
  `fechaNaci_persona` date DEFAULT NULL,
  `TipoDocumento_idTipoDocumento` int(11) NOT NULL,
  `Rol_idRol` int(11) NOT NULL,
  `fk_id_tipoSangre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idPersona`, `nom_persona`, `ape_persona`, `correo_persona`, `telefono_persona`, `fechaNaci_persona`, `TipoDocumento_idTipoDocumento`, `Rol_idRol`, `fk_id_tipoSangre`) VALUES
(1, 'nicolas', 'Lynch', 'aa@aab', '3144', '2005-06-24', 1, 2, 8),
(2, 'Carlos', 'Vargas', NULL, NULL, '2005-06-14', 1, 2, 1),
(3, 'Carlos', 'Vargas', NULL, NULL, '2005-06-14', 1, 2, 1),
(4, 'Sergio', 'Vargas', NULL, NULL, '2000-05-15', 1, 2, 1),
(100, 'cod', 'lol', 'a@aaa', '3114', '2005-01-29', 1, 3, 1),
(101, 'cd', 'dc', NULL, NULL, '1982-02-10', 1, 3, NULL),
(1000, 'ande', 'salsa', NULL, NULL, '2024-04-01', 2, 4, 8),
(1001, 'andy', 'sasa', NULL, NULL, '2022-05-17', 2, 4, 8),
(1002, 'ca', 'an', NULL, NULL, '2024-04-14', 2, 4, 2),
(10000, 'andres', 'Vanegas', NULL, NULL, '1994-10-18', 1, 5, NULL),
(10001, 'andres', 'Vanegas', NULL, NULL, '2002-01-02', 1, 5, NULL),
(10002, 'andres', 'Vanegas', NULL, NULL, '2002-01-02', 1, 5, NULL),
(10003, 'andres', 'Vanegas', NULL, NULL, '1985-10-16', 1, 5, NULL),
(10004, 'andres', 'Vanegas', NULL, NULL, '2005-02-02', 1, 5, NULL),
(10006, 'a', 'b', NULL, NULL, '2024-05-03', 2, 5, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `idRol` int(11) NOT NULL,
  `nom_rol` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `nom_rol`) VALUES
(1, 'Administrador'),
(2, 'Pediatra'),
(3, 'Acudiente'),
(4, 'Paciente'),
(5, 'Padre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipodocumento`
--

CREATE TABLE `tipodocumento` (
  `idTipoDocumento` int(11) NOT NULL,
  `nom_TipoDocumento` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipodocumento`
--

INSERT INTO `tipodocumento` (`idTipoDocumento`, `nom_TipoDocumento`) VALUES
(1, 'CC'),
(2, 'TI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoenfermedad`
--

CREATE TABLE `tipoenfermedad` (
  `idTipoEnfermedad` int(11) NOT NULL,
  `nom_TipoEnfermedad` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipoenfermedad`
--

INSERT INTO `tipoenfermedad` (`idTipoEnfermedad`, `nom_TipoEnfermedad`) VALUES
(1, 'Alergias'),
(2, 'Cáncer'),
(3, 'Dermatológicas'),
(4, 'Digestivas'),
(5, 'Enfermedades del pie'),
(6, 'Enfermedades del viajero'),
(7, 'Enfermedades genéticas'),
(8, 'Enfermedades infecciosas'),
(9, 'Enfermedades neurológicas'),
(10, 'Enfermedades psicológicas'),
(11, 'Enfermedades raras'),
(12, 'Enfermedades respiratorias'),
(13, 'Enfermedades vasculares y del corazón'),
(14, 'Ginecológicas'),
(15, 'Medicina Interna'),
(16, 'Músculos y huesos'),
(17, 'Odontológicas'),
(18, 'Oftalmológicas'),
(19, 'Pediátricas'),
(20, 'Psiquiátricas'),
(21, 'Urológicas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposangre`
--

CREATE TABLE `tiposangre` (
  `id_tipoSangre` int(11) NOT NULL,
  `nom_tipoSang` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tiposangre`
--

INSERT INTO `tiposangre` (`id_tipoSangre`, `nom_tipoSang`) VALUES
(1, 'A+'),
(2, 'A-'),
(3, 'B+'),
(4, 'B-'),
(5, 'AB+'),
(6, 'AB-'),
(7, 'O+'),
(8, 'O-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipovacuna`
--

CREATE TABLE `tipovacuna` (
  `idTipoVacuna` int(11) NOT NULL,
  `nom_TipoVacuna` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipovacuna`
--

INSERT INTO `tipovacuna` (`idTipoVacuna`, `nom_TipoVacuna`) VALUES
(1, 'Hepatitis B'),
(2, 'Difteria, Tos ferina, Tétanos (DPT)'),
(3, 'Polio'),
(4, 'Neumococo'),
(5, 'Haemophilus influenzae tipo b (Hib)'),
(6, 'Rotavirus'),
(7, 'Sarampión, Rubeola, Paperas (SRP)'),
(8, 'Varicela'),
(9, 'Hepatitis A'),
(10, 'Influenza'),
(11, 'Virus del Papiloma Humano (VPH)'),
(12, 'Fiebre Amarilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipovacuna_has_visita`
--

CREATE TABLE `tipovacuna_has_visita` (
  `TipoVacuna_idTipoVacuna` int(11) NOT NULL,
  `Visita_idVisita` int(11) NOT NULL,
  `observacion_visitaVacuna` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipovacuna_has_visita`
--

INSERT INTO `tipovacuna_has_visita` (`TipoVacuna_idTipoVacuna`, `Visita_idVisita`, `observacion_visitaVacuna`) VALUES
(1, 9, '1ra dosis\r'),
(3, 9, '1ra dosis\r'),
(3, 13, '1ra Dosis\r'),
(5, 1, '1ra Dosis\r'),
(5, 5, '1ra Dosis\r'),
(7, 1, '1\r'),
(8, 2, 're\r'),
(8, 8, 're\r'),
(8, 13, '1ra Dosis\r');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vinculo`
--

CREATE TABLE `vinculo` (
  `id_vinculo` int(11) NOT NULL,
  `nom_vinc` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vinculo`
--

INSERT INTO `vinculo` (`id_vinculo`, `nom_vinc`) VALUES
(1, 'Padre'),
(2, 'Madre'),
(3, 'Abuelo/Abuela'),
(4, 'Hermano/Hermana'),
(5, 'Tio/Tia'),
(6, 'Familiar cercano'),
(7, 'Tutor legal'),
(8, 'Cuidador temporal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita`
--

CREATE TABLE `visita` (
  `idVisita` int(11) NOT NULL,
  `pesoPaciente_visita` float DEFAULT NULL,
  `alturaPaciente_visita` float DEFAULT NULL,
  `perimetroCefaPaciente_visita` float DEFAULT NULL,
  `fecha_visita` date DEFAULT NULL,
  `obserCirugPaciente_visita` varchar(100) DEFAULT NULL,
  `IMC_visita` float DEFAULT NULL,
  `Pediatra_idPediatra_idPersona` int(11) NOT NULL,
  `fk_idPaciente_idPersona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `visita`
--

INSERT INTO `visita` (`idVisita`, `pesoPaciente_visita`, `alturaPaciente_visita`, `perimetroCefaPaciente_visita`, `fecha_visita`, `obserCirugPaciente_visita`, `IMC_visita`, `Pediatra_idPediatra_idPersona`, `fk_idPaciente_idPersona`) VALUES
(1, 7, 30, 10, '2024-05-04', 'hola', 77, 1, 1000),
(2, 7, 30, 10, '2024-05-04', 'hola', 77, 1, 1000),
(3, 1, 1, 1, '2024-05-04', 'hola', 10000, 1, 1000),
(4, 60, 1, 20, '2024-05-04', 'a', 20, 1, 1000),
(5, 5, 30, 0, '2024-05-04', '', 55, 1, 1000),
(6, 5, 30, 0, '2024-05-04', '', 55, 1, 1000),
(7, 2, 10, 0, '2024-05-04', '', 199, 1, 1000),
(8, 2, 10, 0, '2024-05-04', '', 199, 1, 1000),
(9, 7, 51, 0, '2024-05-04', 'sin observaciones', 26, 1, 1000),
(10, 5, 51, 0, '2024-05-04', 'sin observaciones', 19, 1, 1000),
(11, 5, 51, 0, '2024-05-04', 'sin observaciones', 19, 1, 1000),
(12, 6, 51, 10, '2024-05-04', 'no', 23, 1, 1000),
(13, 5, 51, 10, '2024-05-04', 'no hay observaciones', 19, 1, 1000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_has_tipoenfermedad`
--

CREATE TABLE `visita_has_tipoenfermedad` (
  `Visita_idVisita` int(11) NOT NULL,
  `TipoEnfermedad_idTipoEnfermedad` int(11) NOT NULL,
  `observacion_visitaEnfermedad` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `visita_has_tipoenfermedad`
--

INSERT INTO `visita_has_tipoenfermedad` (`Visita_idVisita`, `TipoEnfermedad_idTipoEnfermedad`, `observacion_visitaEnfermedad`) VALUES
(10, 13, 'cardiopatía congénita\r'),
(11, 7, 'hemofilia\r'),
(11, 13, 'cardiopatía congénita\r'),
(12, 7, 'hemofilia\r'),
(13, 7, 'hemofilia\r');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acceso`
--
ALTER TABLE `acceso`
  ADD PRIMARY KEY (`Persona_idPersona`),
  ADD KEY `fk_Acceso_Persona1_idx` (`Persona_idPersona`),
  ADD KEY `fk_Acceso_Estado1_idx` (`fk_id_estado`);

--
-- Indices de la tabla `acudiente`
--
ALTER TABLE `acudiente`
  ADD PRIMARY KEY (`Persona_idPersona`),
  ADD KEY `fk_Acudiente_Persona1_idx` (`Persona_idPersona`),
  ADD KEY `fk_Acudiente_Vinculo1_idx` (`fk_id_vinculo`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idPaciente_idPersona`),
  ADD KEY `fk_Paciente_Pediatra1_idx` (`Pediatra_idPediatra_idPersona`),
  ADD KEY `fk_Paciente_Acudiente1_idx` (`Acudiente_Persona_idPersona`);

--
-- Indices de la tabla `paciente_has_acudiente`
--
ALTER TABLE `paciente_has_acudiente`
  ADD PRIMARY KEY (`Paciente_idPaciente_idPersona`,`Padre_idPadre_idPersona`),
  ADD KEY `Padre_idPadre_idPersona` (`Padre_idPadre_idPersona`);

--
-- Indices de la tabla `paciente_padre`
--
ALTER TABLE `paciente_padre`
  ADD PRIMARY KEY (`Paciente_idPaciente_idPersona`,`Padre_idPadre_idPersona`),
  ADD KEY `fk_Paciente_has_Acudiente_Acudiente1_idx` (`Padre_idPadre_idPersona`),
  ADD KEY `fk_Paciente_has_Acudiente_Paciente1_idx` (`Paciente_idPaciente_idPersona`);

--
-- Indices de la tabla `padre`
--
ALTER TABLE `padre`
  ADD PRIMARY KEY (`idAcudiente_idPersona`),
  ADD KEY `fk_Padre_Vinculo1_idx` (`fk_id_vinculo`);

--
-- Indices de la tabla `pediatra`
--
ALTER TABLE `pediatra`
  ADD PRIMARY KEY (`idPediatra_idPersona`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idPersona`),
  ADD KEY `fk_Persona_TipoDocumento_idx` (`TipoDocumento_idTipoDocumento`),
  ADD KEY `fk_Persona_Rol1_idx` (`Rol_idRol`),
  ADD KEY `fk_Persona_TipoSangre1_idx` (`fk_id_tipoSangre`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `tipodocumento`
--
ALTER TABLE `tipodocumento`
  ADD PRIMARY KEY (`idTipoDocumento`);

--
-- Indices de la tabla `tipoenfermedad`
--
ALTER TABLE `tipoenfermedad`
  ADD PRIMARY KEY (`idTipoEnfermedad`);

--
-- Indices de la tabla `tiposangre`
--
ALTER TABLE `tiposangre`
  ADD PRIMARY KEY (`id_tipoSangre`);

--
-- Indices de la tabla `tipovacuna`
--
ALTER TABLE `tipovacuna`
  ADD PRIMARY KEY (`idTipoVacuna`);

--
-- Indices de la tabla `tipovacuna_has_visita`
--
ALTER TABLE `tipovacuna_has_visita`
  ADD PRIMARY KEY (`TipoVacuna_idTipoVacuna`,`Visita_idVisita`),
  ADD KEY `fk_TipoVacuna_has_Visita_Visita1_idx` (`Visita_idVisita`),
  ADD KEY `fk_TipoVacuna_has_Visita_TipoVacuna1_idx` (`TipoVacuna_idTipoVacuna`);

--
-- Indices de la tabla `vinculo`
--
ALTER TABLE `vinculo`
  ADD PRIMARY KEY (`id_vinculo`);

--
-- Indices de la tabla `visita`
--
ALTER TABLE `visita`
  ADD PRIMARY KEY (`idVisita`),
  ADD KEY `fk_Visita_Pediatra1_idx` (`Pediatra_idPediatra_idPersona`),
  ADD KEY `fk_Visita_Paciente1_idx` (`fk_idPaciente_idPersona`);

--
-- Indices de la tabla `visita_has_tipoenfermedad`
--
ALTER TABLE `visita_has_tipoenfermedad`
  ADD PRIMARY KEY (`Visita_idVisita`,`TipoEnfermedad_idTipoEnfermedad`),
  ADD KEY `fk_Visita_has_TipoEnfermedad_TipoEnfermedad1_idx` (`TipoEnfermedad_idTipoEnfermedad`),
  ADD KEY `fk_Visita_has_TipoEnfermedad_Visita1_idx` (`Visita_idVisita`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acceso`
--
ALTER TABLE `acceso`
  ADD CONSTRAINT `fk_Acceso_Estado1` FOREIGN KEY (`fk_id_estado`) REFERENCES `estado` (`id_estado`),
  ADD CONSTRAINT `fk_Acceso_Persona1` FOREIGN KEY (`Persona_idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `acudiente`
--
ALTER TABLE `acudiente`
  ADD CONSTRAINT `fk_Acudiente_Persona1` FOREIGN KEY (`Persona_idPersona`) REFERENCES `persona` (`idPersona`),
  ADD CONSTRAINT `fk_Acudiente_Vinculo1` FOREIGN KEY (`fk_id_vinculo`) REFERENCES `vinculo` (`id_vinculo`);

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `fk_Paciente_Acudiente1` FOREIGN KEY (`Acudiente_Persona_idPersona`) REFERENCES `acudiente` (`Persona_idPersona`),
  ADD CONSTRAINT `fk_Paciente_Pediatra1` FOREIGN KEY (`Pediatra_idPediatra_idPersona`) REFERENCES `pediatra` (`idPediatra_idPersona`),
  ADD CONSTRAINT `fk_Paciente_Persona1` FOREIGN KEY (`idPaciente_idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `paciente_has_acudiente`
--
ALTER TABLE `paciente_has_acudiente`
  ADD CONSTRAINT `paciente_has_acudiente_ibfk_1` FOREIGN KEY (`Paciente_idPaciente_idPersona`) REFERENCES `paciente` (`idPaciente_idPersona`),
  ADD CONSTRAINT `paciente_has_acudiente_ibfk_2` FOREIGN KEY (`Padre_idPadre_idPersona`) REFERENCES `padre` (`idAcudiente_idPersona`);

--
-- Filtros para la tabla `paciente_padre`
--
ALTER TABLE `paciente_padre`
  ADD CONSTRAINT `fk_Paciente_has_Acudiente_Acudiente1` FOREIGN KEY (`Padre_idPadre_idPersona`) REFERENCES `padre` (`idAcudiente_idPersona`),
  ADD CONSTRAINT `fk_Paciente_has_Acudiente_Paciente1` FOREIGN KEY (`Paciente_idPaciente_idPersona`) REFERENCES `paciente` (`idPaciente_idPersona`);

--
-- Filtros para la tabla `padre`
--
ALTER TABLE `padre`
  ADD CONSTRAINT `fk_Padre_Vinculo1` FOREIGN KEY (`fk_id_vinculo`) REFERENCES `vinculo` (`id_vinculo`),
  ADD CONSTRAINT `fk_table1_Persona1` FOREIGN KEY (`idAcudiente_idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `pediatra`
--
ALTER TABLE `pediatra`
  ADD CONSTRAINT `fk_Pediatra_Persona1` FOREIGN KEY (`idPediatra_idPersona`) REFERENCES `persona` (`idPersona`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `fk_Persona_Rol1` FOREIGN KEY (`Rol_idRol`) REFERENCES `rol` (`idRol`),
  ADD CONSTRAINT `fk_Persona_TipoDocumento` FOREIGN KEY (`TipoDocumento_idTipoDocumento`) REFERENCES `tipodocumento` (`idTipoDocumento`),
  ADD CONSTRAINT `fk_Persona_TipoSangre1` FOREIGN KEY (`fk_id_tipoSangre`) REFERENCES `tiposangre` (`id_tipoSangre`);

--
-- Filtros para la tabla `tipovacuna_has_visita`
--
ALTER TABLE `tipovacuna_has_visita`
  ADD CONSTRAINT `fk_TipoVacuna_has_Visita_TipoVacuna1` FOREIGN KEY (`TipoVacuna_idTipoVacuna`) REFERENCES `tipovacuna` (`idTipoVacuna`),
  ADD CONSTRAINT `fk_TipoVacuna_has_Visita_Visita1` FOREIGN KEY (`Visita_idVisita`) REFERENCES `visita` (`idVisita`);

--
-- Filtros para la tabla `visita`
--
ALTER TABLE `visita`
  ADD CONSTRAINT `fk_Visita_Paciente1` FOREIGN KEY (`fk_idPaciente_idPersona`) REFERENCES `paciente` (`idPaciente_idPersona`),
  ADD CONSTRAINT `fk_Visita_Pediatra1` FOREIGN KEY (`Pediatra_idPediatra_idPersona`) REFERENCES `pediatra` (`idPediatra_idPersona`);

--
-- Filtros para la tabla `visita_has_tipoenfermedad`
--
ALTER TABLE `visita_has_tipoenfermedad`
  ADD CONSTRAINT `fk_Visita_has_TipoEnfermedad_TipoEnfermedad1` FOREIGN KEY (`TipoEnfermedad_idTipoEnfermedad`) REFERENCES `tipoenfermedad` (`idTipoEnfermedad`),
  ADD CONSTRAINT `fk_Visita_has_TipoEnfermedad_Visita1` FOREIGN KEY (`Visita_idVisita`) REFERENCES `visita` (`idVisita`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
