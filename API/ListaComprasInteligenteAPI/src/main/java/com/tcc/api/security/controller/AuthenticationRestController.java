package com.tcc.api.security.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.api.entity.Usuario;
import com.tcc.api.security.jwt.JwtAuthenticationRequest;
import com.tcc.api.security.jwt.JwtTokenUtil;
import com.tcc.api.security.model.CurrentUser;
import com.tcc.api.service.UsuarioService;

//API = 8080
//Angular = 4200

@RestController
@CrossOrigin(origins = "*") //Permitindo o acesso de qualquer IP
public class AuthenticationRestController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private UsuarioService usuarioService;
	
	//Solicitar um token ao realizar acesso
	@PostMapping(value="/api/auth")
    public ResponseEntity<?> gerarToken(@RequestBody JwtAuthenticationRequest authenticationRequest) throws AuthenticationException {

        final Authentication autenticacao = authenticationManager.authenticate(
        		new UsernamePasswordAuthenticationToken(
        				authenticationRequest.getUsername(), 
        				authenticationRequest.getPassword(), null
        		));
        
        SecurityContextHolder.getContext().setAuthentication(autenticacao);
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.gerarToken(userDetails);
        
        final Usuario user = usuarioService.findByUsername(authenticationRequest.getUsername());
        user.setSenha(null);
        
        return ResponseEntity.ok(new CurrentUser(token, user));
	}
	
	@PostMapping(value="/api/refresh")
    public ResponseEntity<?> refreshAndRegerarToken(HttpServletRequest request) {
	    String token = request.getHeader("Authorization");
	    String username = jwtTokenUtil.getUsernameToken(token);
	    final Usuario usuario = usuarioService.findByUsername(username);
	    
	    if (jwtTokenUtil.atualizarToken(token)) {
	        String refreshedToken = jwtTokenUtil.refreshToken(token);
	        return ResponseEntity.ok(new CurrentUser(refreshedToken, usuario));
	    } else {
	        return ResponseEntity.badRequest().body(null);
	    }
    }
}
