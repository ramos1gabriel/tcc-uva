-- agrupar cardapios (melhor pra visualizar)
SELECT * FROM cardapiosemanal cardapio
GROUP BY cardapio.DATA_CRIACAO;

-- contar qtd refeicoes no cardapio semanal
SELECT COUNT(cardapio.DATA_CRIACAO) AS REFEICOES
FROM cardapiosemanal cardapio 
WHERE cardapio.DATA_CRIACAO = '2021-11-07';

-- CARDAPIOS
SELECT * FROM cardapioSemanal;

-- USUARIOS
SELECT * FROM usuario;

-- EXCLUIR USUARIO
DELETE FROM usuario WHERE ID = 8;

-- PROCURAR INGREDIENTE
SELECT * FROM ingrediente WHERE NOME LIKE '%caf%';

-- RECEITAS
SELECT * FROM receita WHERE ID = 10;
SELECT * FROM receitaingrediente WHERE INGREDIENTE_ID = 26;
SELECT * FROM modopreparo;



