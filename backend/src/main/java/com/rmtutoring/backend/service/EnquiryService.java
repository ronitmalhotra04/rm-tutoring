package com.rmtutoring.backend.service;

import com.rmtutoring.backend.model.Enquiry;
import com.rmtutoring.backend.repository.EnquiryRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class EnquiryService {

    private final EnquiryRepository enquiryRepository;

    public EnquiryService(EnquiryRepository enquiryRepository) {
        this.enquiryRepository = enquiryRepository;
    }

    // Save a new enquiry from the contact form
    // We also set the time it was submitted automatically
    public Enquiry saveEnquiry(Enquiry enquiry) {
        enquiry.setSubmittedAt(LocalDateTime.now());
        enquiry.setResponded(false);
        return enquiryRepository.save(enquiry);
    }

    // Get all enquiries you haven't replied to yet
    public List<Enquiry> getUnrespondedEnquiries() {
        return enquiryRepository.findByResponded(false);
    }

    // Get all enquiries ever
    public List<Enquiry> getAllEnquiries() {
        return enquiryRepository.findAll();
    }

    // Mark an enquiry as responded
    public Enquiry markAsResponded(Long enquiryId) {
        Enquiry enquiry = enquiryRepository.findById(enquiryId).get();
        enquiry.setResponded(true);
        return enquiryRepository.save(enquiry);
    }
}
