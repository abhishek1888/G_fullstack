package com.hexa.gym.service.serviceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.gym.dto.UserDTO;
import com.hexa.gym.entity.User;
import com.hexa.gym.repsitory.UserRepository;
import com.hexa.gym.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public UserDTO register(UserDTO userDTO) {
		
		User user=modelMapper.map(userDTO, User.class);
		
		User newuser=userRepository.save(user);
		 
		return modelMapper.map(newuser,UserDTO.class);
	}

	@Override
	public UserDTO findByEmail(String email) {
		User user=userRepository.findByEmail(email);
		if(user==null)
			return null;
		return modelMapper.map(user,UserDTO.class);
	}

}
