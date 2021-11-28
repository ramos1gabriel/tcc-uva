SELECT * FROM cardapioSemanal car GROUP BY car.DATA_CRIACAO;
SELECT COUNT(car.DATA_CRIACAO) FROM cardapiosemanal car WHERE car.DATA_CRIACAO = '2021-10-22';

-- CARDAPIOS
SELECT * FROM cardapioSemanal;

-- USUARIOS
SELECT * FROM usuario;

DELETE FROM usuario WHERE id = 8;

-- INGREDIENTES
SELECT * FROM ingrediente where NOME like '%água%';

-- RECEITAS
SELECT * FROM receita where ID = 10;
SELECT * FROM receitaingrediente where INGREDIENTE_ID = 26;
SELECT * FROM modopreparo;



