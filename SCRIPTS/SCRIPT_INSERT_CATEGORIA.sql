-- --------------------------------------------------------
-- TABELA DE CATEGORIA (LEGADO)
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `categoria` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(100) DEFAULT NULL,
  `NOME` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO `categoria` (`ID`, `DESCRICAO`, `NOME`) VALUES
	(1, NULL, 'Bolos e tortas doces'),
	(2, NULL, 'Carnes'),
	(3, NULL, 'Peixes e frutos do mar'),
	(4, NULL, 'Saladas, molhos e acompanhamentos'),
	(5, NULL, 'Sopas'),
	(6, NULL, 'Bebidas'),
	(7, NULL, 'Doces e sobremesas'),
	(8, NULL, 'Lanches'),
	(9, NULL, 'Alimentação Saudável');