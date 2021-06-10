-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2021 a las 23:34:17
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `incidents`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidents`
--

CREATE TABLE `incidents` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `actions` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `incidents`
--

INSERT INTO `incidents` (`id`, `description`, `actions`, `name`, `date`, `status`, `reason`, `createdAt`, `updatedAt`) VALUES
(1, 'Accidente automovilístico', '*Se llamó a la gruá\n*Se llamó al seguro del auto', 'Jane Doe', '2021-06-10 00:00:00', 'Open', NULL, '2021-06-10 21:20:32', '2021-06-10 21:20:32'),
(2, 'Inasistencia de empleado', '*No se le pagó el día al empleado', 'John Doe', '2021-06-10 21:19:49', 'Open', NULL, '2021-06-10 21:20:54', '2021-06-10 21:20:54'),
(3, 'Retardo de empleado', '*Se le llamó la atención al empleado', 'Bob Park', '2021-06-10 21:19:49', 'Open', NULL, '2021-06-10 21:21:44', '2021-06-10 21:21:44'),
(4, 'Fallo en una aplicación', '*Se llamó a un desarrollador para analizar la aplicación', 'Jane Doe', '2021-06-08 00:00:00', 'Open', NULL, '2021-06-10 21:22:52', '2021-06-10 21:22:52');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidents`
--
ALTER TABLE `incidents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidents`
--
ALTER TABLE `incidents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
