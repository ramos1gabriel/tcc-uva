-- INGREDIENTES
INSERT INTO `ingrediente` (`ID`, `NOME`) VALUES
	(1, 'Batata'),
	(4, 'Pimenta do reino'),
	(7, 'Leite Condensado'),
	(11, 'Manteiga'),
	(12, 'Chocolate em po');
	
-- RECEITAS
INSERT INTO `receita` (`ID`, `CATEGORIA`, `DESCRICAO`, `NOME`, `USUARIO_ID`) VALUES
	(10, 'bolos_tortas_doces', 'Esse bolo de cenoura de liquidificador fica pronto em menos de 1 hora leva apenas 20 minutos', 'Bolo de Cenoura de Liquidificador', 1),
	(17, 'bolos_tortas_doces', 'teste', 'Brigadeiro de panela', 1);
	
	
-- RECEITAINGREDIENTE
INSERT INTO `receitaingrediente` (`ID`, `OBSERVACAO`, `QTD`, `UNIDADE_MEDIDA`, `INGREDIENTE_ID`, `RECEITA_ID`) VALUES
	(1, '', 10, 'UNI', 1, 10),
	(2, '', 100, 'G', 4, 10),
	(17, '', 1, 'UNI', 7, 17),
	(18, '', 2, 'COL', 11, 17),
	(19, '', 3, 'COL', 12, 17);
	
-- MODO PREPARO
INSERT INTO `modopreparo` (`ID`, `DSCOB`, `DSMAS`, `DSREC`, `FLCOB`, `FLMAS`, `FLREC`, `RECEITA_ID`) VALUES
	(2, '', 'teste', '', b'1', b'0', b'1', 10),
	(5, '', 'teste', '', b'1', b'0', b'1', 17);

-- CARDAPIO SEMANAL
INSERT INTO `cardapiosemanal` (`ID`, `DATA_CRIACAO`, `QUARTA_ALMOCO`, `QUARTA_CAFE`, `QUARTA_JANTAR`, `QUARTA_LANCHE`, `QUINTA_ALMOCO`, `QUINTA_CAFE`, `QUINTA_JANTAR`, `QUINTA_LANCHE`, `SEGUNDA_ALMOCO`, `SEGUNDA_CAFE`, `SEGUNDA_JANTAR`, `SEGUNDA_LANCHE`, `SEXTA_ALMOCO`, `SEXTA_CAFE`, `SEXTA_JANTAR`, `SEXTA_LANCHE`, `TERCA_ALMOCO`, `TERCA_CAFE`, `TERCA_JANTAR`, `TERCA_LANCHE`) VALUES
	(1, '2020-08-03', 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL),
	(12, '2021-01-02', 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL, 10, NULL);