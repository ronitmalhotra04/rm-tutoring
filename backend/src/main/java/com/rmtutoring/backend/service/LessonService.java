package com.rmtutoring.backend.service;

import com.rmtutoring.backend.model.Lesson;
import com.rmtutoring.backend.repository.LessonRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;

    public LessonService(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }

    // Get all lessons for one student
    public List<Lesson> getLessonsForStudent(Long studentId) {
        return lessonRepository.findByStudentId(studentId);
    }

    // Get all unpaid lessons
    public List<Lesson> getUnpaidLessons() {
        return lessonRepository.findByPaid(false);
    }

    // Calculate total amount owed across all unpaid lessons
    // This uses a simple loop - DSA in action
    public double calculateTotalOwed() {
        List<Lesson> unpaidLessons = lessonRepository.findByPaid(false);

        double total = 0;

        // Loop through every unpaid lesson and add up the amounts
        for (Lesson lesson : unpaidLessons) {
            total += lesson.getAmountCharged();
        }

        return total;
    }

    // Save a new lesson
    public Lesson saveLesson(Lesson lesson) {
        return lessonRepository.save(lesson);
    }

    // Mark a lesson as paid
    public Lesson markAsPaid(Long lessonId) {
        // Find the lesson, update it, save it back
        Lesson lesson = lessonRepository.findById(lessonId).get();
        lesson.setPaid(true);
        return lessonRepository.save(lesson);
    }
}
