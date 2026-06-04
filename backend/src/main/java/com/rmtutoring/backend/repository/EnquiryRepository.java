package com.rmtutoring.backend.repository;

import com.rmtutoring.backend.model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {

    // Find all enquiries you haven't responded to yet
    List<Enquiry> findByResponded(boolean responded);
}
