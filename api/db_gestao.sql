-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/03/2024 às 22:07
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_gestao`
--
CREATE DATABASE IF NOT EXISTS `db_gestao` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_gestao`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_funcionario`
--

CREATE TABLE `tb_funcionario` (
  `id_funcionario` int(11) NOT NULL,
  `nm_funcionario` varchar(25) NOT NULL,
  `cd_sexo` varchar(10) NOT NULL,
  `nu_telefone` varchar(20) NOT NULL,
  `nm_endereco` varchar(150) NOT NULL,
  `img_foto` varchar(500) NOT NULL,
  `dt_nasc` varchar(10) NOT NULL,
  `dt_contrato` varchar(15) NOT NULL,
  `nm_cargo` varchar(35) NOT NULL,
  `vl_salario` varchar(20) NOT NULL,
  `dc_descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_funcionario`
--

INSERT INTO `tb_funcionario` (`id_funcionario`, `nm_funcionario`, `cd_sexo`, `nu_telefone`, `nm_endereco`, `img_foto`, `dt_nasc`, `dt_contrato`, `nm_cargo`, `vl_salario`, `dc_descricao`) VALUES
(15, 'isabelle rodrigues prates', 'feminino', '(13) 9 9999-9999', 'rua dos anjos, 5', 'https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_1280.jpg', '15', 'Dezembro - 2007', 'Desenvolvimento de sistemas', 'R$ 6546.54', 'Isa trabalhou durante 90 dias em uma startup'),
(18, 'lucas', 'Masculino', '2147483647', 'rua dos anjos, 5', 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg', '15', 'dezembro - 1992', 'gestao', '321', 'Lucas fez 5 anos de engenharia da computação'),
(19, 'arthur silva', 'masculino', '123', 'rua dos bobos, 0', 'https://cdn.pixabay.com/photo/2016/03/24/09/10/man-1276384_1280.jpg', '15072000', 'janeiro -2014', 'gestao', '3000', 'Arthur tem experiencia com administracao '),
(20, 'Roberta Santos', 'feminino', '0', 'rua dos bobos, 0', 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg', '12', 'Dezembro - 2007', 'RH', '0', 'Roberta é especialista master em administração'),
(21, 'Brendon Urie', 'Masculino', '(44) 4 4444', 'London street, 987', 'https://www.famousbirthdays.com/headshots/brendon-urie-5.jpg', '12/09/19', 'Dezembro - 2007', 'cantor', 'R$ 100000.', 'Brendon é um cantor excepcional'),
(22, 'James Hetfield', 'Masculino', '(32) 1 3213-2132', 'North America', 'https://www.rockland.fm/sites/default/files/styles/titelbildartikel/public/Titelbild/mad_cool_festival_me_74426052_1_ergebnis.jpg?itok=IRGQFEVO', '13/08/1963', 'dezembro - 1975', 'Guitarrista', 'R$ 3213213.12', 'James é o Tech Lead da incrivel empresa Metallica');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  ADD PRIMARY KEY (`id_funcionario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_funcionario`
--
ALTER TABLE `tb_funcionario`
  MODIFY `id_funcionario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
