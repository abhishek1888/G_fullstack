package com.hexa.gym.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserDTO {
	    private Long userId;

	    private String username;
	    private String password;
	    private String email;
	    //@JsonProperty("isadmin")
	    private boolean admin;
		public UserDTO() {
			super();
			// TODO Auto-generated constructor stub
		}
		public UserDTO(Long userId, String username, String password, String email, boolean admin) {
			super();
			this.userId = userId;
			this.username = username;
			this.password = password;
			this.email = email;
			this.admin = admin;
		}
		public Long getUserId() {
			return userId;
		}
		public void setUserId(Long userId) {
			this.userId = userId;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public boolean isadmin() {
			return admin;
		}
		public void setadmin(boolean isadmin) {
			this.admin = isadmin;
		}
		@Override
		public String toString() {
			return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
					+ ", isAdmin=" + admin + "]";
		}
}
