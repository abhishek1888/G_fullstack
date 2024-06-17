package com.hexa.gym.service;

import java.util.List;

import com.hexa.gym.dto.MemberDTO;
import com.hexa.gym.exception.ResourceNotFoundException;

public interface MemberService {
   public List<MemberDTO> getAllmember();
   public MemberDTO getMemberById(long id) throws ResourceNotFoundException;
   public MemberDTO createMember(MemberDTO memberDTO);
   public MemberDTO updateMember(MemberDTO memberDTO,long id);
   public String deleteMember(long id);
   
}
