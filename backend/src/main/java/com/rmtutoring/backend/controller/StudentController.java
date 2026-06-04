package com.rmtutoring.backend.controller;

import com.rmtutoring.backend.model.Student;
import com.rmtutoring.backend.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// @RestController means this class handles web requests
// @RequestMapping sets the base URL for all methods in this class
@RestController
@RequestMapping("/api/students")
// @CrossOrigin allows our React frontend to call this backend
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // GET /api/students
    // Returns all active students
    @GetMapping
    public List<Student> getActiveStudents() {
        return studentService.getActiveStudents();
    }

    // GET /api/students/sorted
    // Returns students sorted by year level
    @GetMapping("/sorted")
    public List<Student> getSortedStudents() {
        return studentService.getStudentsSortedByYear();
    }

    // POST /api/students
    // Creates a new student
    // @RequestBody means: read the student data from the request
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    // DELETE /api/students/{id}
    // Deletes a student by ID
    // @PathVariable means: get the id from the URL
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}
