package com.hexa.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.gym.dto.UserDTO;
import com.hexa.gym.service.MemberService;
import com.hexa.gym.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService userservice;
	
	@PostMapping("/register")
	public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO)
	{
		
		return ResponseEntity.ok().body(userservice.register(userDTO));
	}
	
	@GetMapping("/login/{email}")
	public ResponseEntity<UserDTO> loginUser(@PathVariable String email)
	{
		return ResponseEntity.ok().body(userservice.findByEmail(email));
	}
}
