package com.rmtutoring.backend.controller;

import com.rmtutoring.backend.model.Lesson;
import com.rmtutoring.backend.service.LessonService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/lessons")
@CrossOrigin(origins = "http://localhost:3000")
public class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    // GET /api/lessons/student/{studentId}
    // Get all lessons for one student
    @GetMapping("/student/{studentId}")
    public List<Lesson> getLessonsForStudent(@PathVariable Long studentId) {
        return lessonService.getLessonsForStudent(studentId);
    }

    // GET /api/lessons/unpaid
    // Get all unpaid lessons
    @GetMapping("/unpaid")
    public List<Lesson> getUnpaidLessons() {
        return lessonService.getUnpaidLessons();
    }

    // GET /api/lessons/owed
    // Get total amount owed across all unpaid lessons
    @GetMapping("/owed")
    public double getTotalOwed() {
        return lessonService.calculateTotalOwed();
    }

    // POST /api/lessons
    // Create a new lesson
    @PostMapping
    public Lesson createLesson(@RequestBody Lesson lesson) {
        return lessonService.saveLesson(lesson);
    }

    // PUT /api/lessons/{id}/paid
    // Mark a lesson as paid
    @PutMapping("/{id}/paid")
    public Lesson markAsPaid(@PathVariable Long id) {
        return lessonService.markAsPaid(id);
    }
}
