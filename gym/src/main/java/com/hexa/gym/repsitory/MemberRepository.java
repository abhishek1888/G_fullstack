package com.hexa.gym.repsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexa.gym.entity.Member;
@Repository
public interface MemberRepository extends JpaRepository<Member,Long>{

}
