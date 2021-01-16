-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.30-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para tcc
CREATE DATABASE IF NOT EXISTS `tcc` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tcc`;

-- Copiando estrutura para tabela tcc.cardapiosemanal
CREATE TABLE IF NOT EXISTS `cardapiosemanal` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `DATA_CRIACAO` date NOT NULL,
  `QUARTA_ALMOCO` bigint(20) NOT NULL,
  `QUARTA_CAFE` bigint(20) DEFAULT NULL,
  `QUARTA_JANTAR` bigint(20) NOT NULL,
  `QUARTA_LANCHE` bigint(20) DEFAULT NULL,
  `QUINTA_ALMOCO` bigint(20) NOT NULL,
  `QUINTA_CAFE` bigint(20) DEFAULT NULL,
  `QUINTA_JANTAR` bigint(20) NOT NULL,
  `QUINTA_LANCHE` bigint(20) DEFAULT NULL,
  `SEGUNDA_ALMOCO` bigint(20) NOT NULL,
  `SEGUNDA_CAFE` bigint(20) DEFAULT NULL,
  `SEGUNDA_JANTAR` bigint(20) NOT NULL,
  `SEGUNDA_LANCHE` bigint(20) DEFAULT NULL,
  `SEXTA_ALMOCO` bigint(20) NOT NULL,
  `SEXTA_CAFE` bigint(20) DEFAULT NULL,
  `SEXTA_JANTAR` bigint(20) NOT NULL,
  `SEXTA_LANCHE` bigint(20) DEFAULT NULL,
  `TERCA_ALMOCO` bigint(20) NOT NULL,
  `TERCA_CAFE` bigint(20) DEFAULT NULL,
  `TERCA_JANTAR` bigint(20) NOT NULL,
  `TERCA_LANCHE` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.cardapiosemanal: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `cardapiosemanal` DISABLE KEYS */;
REPLACE INTO `cardapiosemanal` (`ID`, `DATA_CRIACAO`, `QUARTA_ALMOCO`, `QUARTA_CAFE`, `QUARTA_JANTAR`, `QUARTA_LANCHE`, `QUINTA_ALMOCO`, `QUINTA_CAFE`, `QUINTA_JANTAR`, `QUINTA_LANCHE`, `SEGUNDA_ALMOCO`, `SEGUNDA_CAFE`, `SEGUNDA_JANTAR`, `SEGUNDA_LANCHE`, `SEXTA_ALMOCO`, `SEXTA_CAFE`, `SEXTA_JANTAR`, `SEXTA_LANCHE`, `TERCA_ALMOCO`, `TERCA_CAFE`, `TERCA_JANTAR`, `TERCA_LANCHE`) VALUES
	(1, '2020-08-03', 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL),
	(12, '2021-01-02', 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL);
/*!40000 ALTER TABLE `cardapiosemanal` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.ingrediente
CREATE TABLE IF NOT EXISTS `ingrediente` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.ingrediente: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
REPLACE INTO `ingrediente` (`ID`, `NOME`) VALUES
	(1, 'Batata'),
	(4, 'Pimenta do reino'),
	(7, 'Leite Condensado'),
	(11, 'Manteiga'),
	(12, 'Chocolate em pó');
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.listacompra
CREATE TABLE IF NOT EXISTS `listacompra` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ITEM` varchar(255) NOT NULL,
  `CARDAPIO_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_LISTA_CARDAPIO` (`CARDAPIO_ID`),
  CONSTRAINT `FK_LISTA_CARDAPIO` FOREIGN KEY (`CARDAPIO_ID`) REFERENCES `cardapiosemanal` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.listacompra: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `listacompra` DISABLE KEYS */;
/*!40000 ALTER TABLE `listacompra` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.modopreparo
CREATE TABLE IF NOT EXISTS `modopreparo` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `DSCOB` varchar(255) DEFAULT NULL,
  `DSMAS` varchar(255) DEFAULT NULL,
  `DSREC` varchar(255) DEFAULT NULL,
  `FLCOB` bit(1) DEFAULT NULL,
  `FLMAS` bit(1) DEFAULT NULL,
  `FLREC` bit(1) DEFAULT NULL,
  `RECEITA_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_MODOPREPARO_RECEITA` (`RECEITA_ID`),
  CONSTRAINT `FK_MODOPREPARO_RECEITA` FOREIGN KEY (`RECEITA_ID`) REFERENCES `receita` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.modopreparo: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `modopreparo` DISABLE KEYS */;
REPLACE INTO `modopreparo` (`ID`, `DSCOB`, `DSMAS`, `DSREC`, `FLCOB`, `FLMAS`, `FLREC`, `RECEITA_ID`) VALUES
	(2, '', 'teste', '', b'1', b'0', b'1', 10),
	(5, '', 'teste', '', b'1', b'0', b'1', 17);
/*!40000 ALTER TABLE `modopreparo` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.receita
CREATE TABLE IF NOT EXISTS `receita` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CATEGORIA` varchar(100) NOT NULL,
  `DESCRICAO` varchar(100) DEFAULT NULL,
  `NOME` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UK_8jly5o1bklyw9ykb9r4nx9o2` (`NOME`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.receita: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `receita` DISABLE KEYS */;
REPLACE INTO `receita` (`ID`, `CATEGORIA`, `DESCRICAO`, `NOME`) VALUES
	(10, 'bolos_tortas_doces', 'Esse bolo de cenoura de liquidificador fica pronto em menos de 1 hora leva apenas 20 minutos', 'Bolo de Cenoura de Liquidificador'),
	(17, 'bolos_tortas_doces', 'teste', 'Brigadeiro de panela');
/*!40000 ALTER TABLE `receita` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.receitaingrediente
CREATE TABLE IF NOT EXISTS `receitaingrediente` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `OBSERVACAO` varchar(100) DEFAULT NULL,
  `QTD` double NOT NULL,
  `UNIDADE_MEDIDA` char(5) NOT NULL,
  `INGREDIENTE_ID` bigint(20) NOT NULL,
  `RECEITA_ID` bigint(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK_REC_ING_INGREDIENTE` (`INGREDIENTE_ID`),
  KEY `FK_REC_ING_RECEITA` (`RECEITA_ID`),
  CONSTRAINT `FK_REC_ING_INGREDIENTE` FOREIGN KEY (`INGREDIENTE_ID`) REFERENCES `ingrediente` (`ID`),
  CONSTRAINT `FK_REC_ING_RECEITA` FOREIGN KEY (`RECEITA_ID`) REFERENCES `receita` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.receitaingrediente: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `receitaingrediente` DISABLE KEYS */;
REPLACE INTO `receitaingrediente` (`ID`, `OBSERVACAO`, `QTD`, `UNIDADE_MEDIDA`, `INGREDIENTE_ID`, `RECEITA_ID`) VALUES
	(1, '', 10, 'UNI', 1, 10),
	(2, '', 100, 'G', 4, 10),
	(17, '', 1, 'UNI', 7, 17),
	(18, '', 2, 'COL', 11, 17),
	(19, '', 3, 'COL', 12, 17);
/*!40000 ALTER TABLE `receitaingrediente` ENABLE KEYS */;

-- Copiando estrutura para tabela tcc.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(50) NOT NULL,
  `NOME` varchar(50) NOT NULL,
  `SENHA` varchar(255) NOT NULL,
  `USERNAME` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela tcc.usuario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
REPLACE INTO `usuario` (`ID`, `EMAIL`, `NOME`, `SENHA`, `USERNAME`) VALUES
	(1, 'admin@uva.com', 'Administrador', '$2a$10$EhFXJxqt33x/6pxVooPoYuqT6CMhWhEtya5jkQ3.A.U6pWWv2XRzK', 'admin');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
