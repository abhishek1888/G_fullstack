package com.hexa.gym.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="memeber")
public class Member {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    private String name;
    private String email;
    private String phone;
    private LocalDate membershipExpiry;
    private LocalDate doj;
	public Member() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Member(Long memberId, String name, String email, String phone, LocalDate membershipExpiry, LocalDate doj) {
		super();
		this.memberId = memberId;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.membershipExpiry = membershipExpiry;
		this.doj = doj;
	}
	public Long getMemberId() {
		return memberId;
	}
	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public LocalDate getMembershipExpiry() {
		return membershipExpiry;
	}
	public void setMembershipExpiry(LocalDate membershipExpiry) {
		this.membershipExpiry = membershipExpiry;
	}
	public LocalDate getDoj() {
		return doj;
	}
	public void setDoj(LocalDate doj) {
		this.doj = doj;
	}
	@Override
	public String toString() {
		return "Member [memberId=" + memberId + ", name=" + name + ", email=" + email + ", phone=" + phone
				+ ", membershipExpiry=" + membershipExpiry + ", doj=" + doj + "]";
	}
    
    
}
