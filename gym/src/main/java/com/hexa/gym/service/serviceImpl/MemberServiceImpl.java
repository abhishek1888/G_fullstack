package com.hexa.gym.service.serviceImpl;


import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.gym.dto.MemberDTO;
import com.hexa.gym.entity.Member;
import com.hexa.gym.exception.ResourceNotFoundException;
import com.hexa.gym.repsitory.MemberRepository;
import com.hexa.gym.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberRepository memberRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public List<MemberDTO> getAllmember() {
		List<Member> memberlist=memberRepository.findAll();
		
		return memberlist.stream().map(member->modelMapper.map(member,MemberDTO.class)).collect(Collectors.toList());
	}

	@Override
	public MemberDTO getMemberById(long id) throws ResourceNotFoundException {
		Member member=memberRepository.findById(id).get();
		if(member==null)
			throw new ResourceNotFoundException("Member","query", 400L);
		return modelMapper.map(member,MemberDTO.class);
	}

	@Override
	public MemberDTO createMember(MemberDTO memberDTO) {
		Member getmember=modelMapper.map(memberDTO,Member.class);
		Member member=memberRepository.save(getmember);
		return modelMapper.map(member,MemberDTO.class);
	}

	@Override
	public MemberDTO updateMember(MemberDTO memberDTO, long id) {
		Member member=memberRepository.findById(id).get();
		if(memberDTO.getPhone()!=null)
			member.setPhone(memberDTO.getPhone());
		if(memberDTO.getEmail()!=null)
			member.setEmail(memberDTO.getEmail());
		if(memberDTO.getName()!=null)
			member.setName(memberDTO.getName());
		if(memberDTO.getDoj()!=null)
			member.setDoj(memberDTO.getDoj());
		if(memberDTO.getMembershipExpiry()!=null)
			member.setMembershipExpiry(memberDTO.getMembershipExpiry());
		Member newmember=memberRepository.save(member);
		return modelMapper.map(newmember,MemberDTO.class);
	}

	@Override
	public String deleteMember(long id) {
		memberRepository.deleteById(id);
		return "Deleted";
	}

}
