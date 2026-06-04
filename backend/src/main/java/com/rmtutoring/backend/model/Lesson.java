package com.rmtutoring.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

// This class represents one tutoring lesson in the database
@Entity
@Data
@Table(name = "lessons")
public class Lesson {

    // Unique ID for each lesson, auto-assigned by database
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Which student this lesson belongs to
    // @ManyToOne means: many lessons can belong to one student
    // @JoinColumn is how we link this lesson to a student using their ID
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // When the lesson happened
    private LocalDateTime dateTime;

    // How long the lesson was e.g. 1.0 or 1.5
    private double durationHours;

    // How much was charged for this lesson
    private double amountCharged;

    // Has the parent paid yet?
    private boolean paid;

    // What did you cover in the lesson
    private String notes;
}
