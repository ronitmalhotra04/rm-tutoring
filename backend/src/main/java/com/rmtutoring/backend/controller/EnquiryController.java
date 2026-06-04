package com.rmtutoring.backend.controller;

import com.rmtutoring.backend.model.Enquiry;
import com.rmtutoring.backend.service.EnquiryService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:3000")
public class EnquiryController {

    private final EnquiryService enquiryService;

    public EnquiryController(EnquiryService enquiryService) {
        this.enquiryService = enquiryService;
    }

    // POST /api/enquiries
    // Parent submits the contact form
    @PostMapping
    public Enquiry submitEnquiry(@RequestBody Enquiry enquiry) {
        return enquiryService.saveEnquiry(enquiry);
    }

    // GET /api/enquiries
    // Get all enquiries
    @GetMapping
    public List<Enquiry> getAllEnquiries() {
        return enquiryService.getAllEnquiries();
    }

    // GET /api/enquiries/unresponded
    // Get enquiries you haven't replied to
    @GetMapping("/unresponded")
    public List<Enquiry> getUnresponded() {
        return enquiryService.getUnrespondedEnquiries();
    }

    // PUT /api/enquiries/{id}/responded
    // Mark an enquiry as responded
    @PutMapping("/{id}/responded")
    public Enquiry markAsResponded(@PathVariable Long id) {
        return enquiryService.markAsResponded(id);
    }
}