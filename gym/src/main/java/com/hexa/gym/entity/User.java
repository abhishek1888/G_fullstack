package com.hexa.gym.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long userId;

	    private String username;
	    private String password;
	    private String email;
	    
	    private boolean admin;
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		public User(Long userId, String username, String password, String email, boolean admin) {
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
		public void setAdmin(boolean admin) {
			this.admin = admin;
		}
		@Override
		public String toString() {
			return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
					+ ", isAdmin=" + admin + "]";
		}
	    
	    
}
