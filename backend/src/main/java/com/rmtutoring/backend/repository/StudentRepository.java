package com.rmtutoring.backend.repository;

import com.rmtutoring.backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// JpaRepository gives us free database methods:
// save(), findById(), findAll(), deleteById() etc
// We never have to write SQL ourselves
public interface StudentRepository extends JpaRepository<Student, Long> {

    // Find all students by whether they are active or not
    // Spring Boot reads the method name and figures out the SQL automatically
    List<Student> findByActive(boolean active);

    // Find all students in a specific year level
    List<Student> findByYearLevel(int yearLevel);
}
