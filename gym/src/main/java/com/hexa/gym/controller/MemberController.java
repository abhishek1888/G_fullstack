package com.hexa.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.gym.dto.MemberDTO;
import com.hexa.gym.exception.ResourceNotFoundException;
import com.hexa.gym.service.MemberService;

@RestController
@RequestMapping("/api/members")
@CrossOrigin("*")
public class MemberController {
	
	@Autowired
	private MemberService memberservice;
	
	@GetMapping
	public ResponseEntity<List<MemberDTO>> getAllmembers()
	{
		return ResponseEntity.ok().body(memberservice.getAllmember());
	}
	@GetMapping("/{id}")
	public ResponseEntity<MemberDTO> getmemberById(@PathVariable long id) throws ResourceNotFoundException
	{
		return ResponseEntity.ok().body(memberservice.getMemberById(id));
	}
	@PostMapping
	public ResponseEntity<MemberDTO> createmember(@RequestBody MemberDTO memberDTO)
	{
		return ResponseEntity.ok().body(memberservice.createMember(memberDTO));
	}
	@PutMapping("/{id}")
	public ResponseEntity<MemberDTO> updatemember(@RequestBody MemberDTO memberDTO,@PathVariable long id)
	{
		return ResponseEntity.ok().body(memberservice.updateMember(memberDTO, id));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deletememberById(@PathVariable long id)
	{
		return ResponseEntity.ok().body(memberservice.deleteMember(id));
	}
	
    
}
