package com.rmtutoring.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

// This class represents a contact form submission from a parent
@Entity
@Data
@Table(name = "enquiries")
public class Enquiry {

    // Unique ID for each enquiry, auto-assigned
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String parentName;
    private String parentEmail;
    private String parentPhone;
    private String studentName;
    private int yearLevel;
    private String subject;

    // The message the parent wrote
    private String message;

    // When they submitted the form
    private LocalDateTime submittedAt;

    // Have you replied to them yet?
    private boolean responded;
}
