package com.tcc.api.security.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) 
			throws ServletException, IOException {
		
		String tokenAutorizado = request.getHeader("Authorization");
		String username = jwtTokenUtil.getUsernameToken(tokenAutorizado);

		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(username); //login
			
			if (jwtTokenUtil.validateToken(tokenAutorizado, userDetails)) {
				UsernamePasswordAuthenticationToken autenticacao = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()); //pega permissoes
				
				autenticacao.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				logger.info("Usuario autenticado " + username + ", definindo contexto de seguranca");
				SecurityContextHolder.getContext().setAuthentication(autenticacao);
			}
		}
		
		chain.doFilter(request, response);
	}
}
