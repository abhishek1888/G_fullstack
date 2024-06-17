package com.hexa.gym.service;

import com.hexa.gym.dto.UserDTO;

public interface UserService {
         public UserDTO register(UserDTO userDTO);
         public UserDTO findByEmail(String email);
}
