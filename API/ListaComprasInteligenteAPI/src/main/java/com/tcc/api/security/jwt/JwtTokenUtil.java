package com.tcc.api.security.jwt;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	static final String CLAIM_KEY_USERNAME = "sub"; //NOME DO USUAÅRIO
	static final String CLAIM_KEY_CREATED = "created"; //CRIADA
	static final String CLAIM_KEY_EXPIRED = "exp"; //EXPIRADA
	
	@Value("${jwt.secret}")
	private String secret;
	
	@Value("${jwt.expiration}")
	private Long expiration;
	
	//Obtem o username de dentro do token
	public String getUsernameToken(String token) {
		String username;
		
		try {
			final Claims claims = getClaimsFromToken(token);
			username = claims.getSubject();
		} catch (Exception e) {
			username = null;
		}
		
		return username;
	}
	
	//Obtem a data de expiracao de dentro do token
	public java.util.Date getDataExpiracaoToken(String token) {
		java.util.Date expiration;
		
		try {
			final Claims claims = getClaimsFromToken(token);
			expiration = claims.getExpiration();
		} catch(Exception e) {
			expiration = null;
		}
		
		return expiration;
	}
	
	//Metodo que transfere o conteudo do corpo do token
	private Claims getClaimsFromToken(String token) {
		Claims claims;
		
		try {
			claims = Jwts.parser()
					.setSigningKey(secret)
					.parseClaimsJws(token)
					.getBody();
		} catch(Exception e) {
			claims = null;
		}
		
		return claims;
	}
	
	//Verifica se o token esta expirado
	private Boolean isTokenExpirado(String token) {
		final java.util.Date expiration = getDataExpiracaoToken(token);
		return expiration.before(new java.util.Date());
	}
	
	//Gerar o token
	public String gerarToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		
		claims.put(CLAIM_KEY_USERNAME, userDetails.getUsername());
		
		final java.util.Date dataCriacao = new java.util.Date();
		claims.put(CLAIM_KEY_CREATED, dataCriacao);
		
		return configToken(claims);
	}
	
	//Auxiliar a geracao do token
	private String configToken(Map<String, Object> claims) {
		final java.util.Date dataCriacao = (java.util.Date) claims.get(CLAIM_KEY_CREATED);
		final java.util.Date dataExpiracao = new java.util.Date(dataCriacao.getTime() + expiration * 1000);
		return Jwts.builder()
				.setClaims(claims)
				.setExpiration(dataExpiracao)
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
	
	public Boolean atualizarToken(String token) {
		return (!isTokenExpirado(token));
	}
	
	//Gera novo tolken a partir da data definida no application
	public String refreshToken(String token) {
		String refreshedToken;
		
		try {
			final Claims claims = getClaimsFromToken(token);
			claims.put(CLAIM_KEY_CREATED, new Date());
			refreshedToken = configToken(claims);
		} catch(Exception e) {
			refreshedToken = null;
		}
		
		return refreshedToken;
	}
	
	//Realiza a validacao do token a partir do username e data de expiracao
	public Boolean validateToken(String token, UserDetails userDetails) {
		JwtUser user = (JwtUser) userDetails;
		final String username = getUsernameToken(token);
		return (username.equals(user.getUsername()) && !isTokenExpirado(token));
	}
}
