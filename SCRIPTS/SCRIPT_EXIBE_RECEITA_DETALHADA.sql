SELECT 	REC.NOME AS RECEITA,
		ING.NOME AS INGREDIENTE,
		ROUND(RECING.QTD) AS QTD,
		CASE RECING.UNIDADE_MEDIDA
			WHEN  'XCR' THEN "Xícara(s)"
			WHEN 'COL'THEN "Colher(es)"
			WHEN 'K'THEN "Quilo(s)"
			WHEN 'KG'THEN "Quilograma(s)"
			WHEN 'G'THEN "Grama(s)"
			WHEN 'MG'THEN "Miligrama(s)"
			WHEN 'L'THEN "Litro(s)"
			WHEN 'ML'THEN "Mililitro(s)"
			WHEN 'M'THEN "Metro(s)"
			WHEN 'CM'THEN "Centímetro(s)"
			WHEN 'MM'THEN "Milímetro(s)"
			ELSE "Unidade"
		END AS UNIDADE_MEDIDA
		
FROM 	receita REC, 
		ingrediente ING, 
		receitaingrediente RECING 
		
WHERE 	REC.ID = RECING.RECEITA_ID 
		AND ING.ID = RECING.INGREDIENTE_ID
		AND REC.ID = 1;