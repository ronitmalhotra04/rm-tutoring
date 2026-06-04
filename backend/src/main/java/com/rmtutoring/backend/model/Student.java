package com.rmtutoring.backend.model;

import jakarta.persistence.*;
import lombok.Data;

// @Entity tells Spring Boot: this class = a table in the database
@Entity
// @Data tells Lombok: auto-generate getters and setters for me
@Data
// @Table says: name the database table "students"
@Table(name = "students")
public class Student {

    // @Id = this is the primary key (unique ID for each student)
    @Id
    // @GeneratedValue = database auto-assigns the ID, we don't set it manually
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String parentName;
    private String parentEmail;
    private String parentPhone;
    private int yearLevel;
    private String subject;    // "Maths" or "English"
    private String mode;       // "online" or "inperson"
    private double hourlyRate;
    private boolean active;
}
