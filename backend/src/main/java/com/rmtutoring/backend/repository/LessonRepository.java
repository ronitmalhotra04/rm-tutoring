package com.rmtutoring.backend.repository;

import com.rmtutoring.backend.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

    // Find all lessons for a specific student using their ID
    List<Lesson> findByStudentId(Long studentId);

    // Find all lessons that have or haven't been paid
    List<Lesson> findByPaid(boolean paid);
}
