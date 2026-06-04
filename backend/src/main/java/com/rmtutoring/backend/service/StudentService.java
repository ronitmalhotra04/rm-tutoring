package com.rmtutoring.backend.service;

import com.rmtutoring.backend.model.Student;
import com.rmtutoring.backend.repository.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

// @Service tells Spring Boot this class contains business logic
@Service
public class StudentService {

    // This is how we access the database for students
    private final StudentRepository studentRepository;

    // Constructor - Spring Boot automatically passes in the repository
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    // Get all active students
    public List<Student> getActiveStudents() {
        return studentRepository.findByActive(true);
    }

    // Get all students sorted by year level (lowest to highest)
    // This uses a simple sort - DSA in action
    public List<Student> getStudentsSortedByYear() {
        List<Student> students = studentRepository.findAll();

        // Loop through and sort by year level
        // Comparator.comparingInt just means "sort by this number"
        students.sort((a, b) -> a.getYearLevel() - b.getYearLevel());

        return students;
    }

    // Save a new student to the database
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    // Get one student by their ID
    // Optional means: might return a student, might return nothing
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    // Delete a student by their ID
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}