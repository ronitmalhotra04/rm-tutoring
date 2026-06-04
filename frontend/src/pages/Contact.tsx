import React, { useState } from 'react';

function Contact() {

  // useState stores the form data as the parent types
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    yearLevel: '',
    subject: '',
    message: ''
  });

  // This runs every time the parent types in a field
  // It updates the right field in formData
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // This runs when the parent clicks Submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // Send the form data to your Spring Boot backend
      const response = await fetch('http://localhost:8080/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thanks! I will be in touch soon.');
        // Clear the form after submitting
        setFormData({ parentName: '', parentEmail: '', parentPhone: '', studentName: '', yearLevel: '', subject: '', message: '' });
      }
    } catch (error) {
      alert('Something went wrong. Please text me directly on 0435 298 807.');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    fontSize: '15px',
    marginBottom: '16px',
    boxSizing: 'border-box' as const
  };

  return (
    <div style={{ padding: '64px 32px', maxWidth: '600px', margin: '0 auto' }}>

      <h1 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', color: '#0a1535', marginBottom: '12px' }}>
        Get in Touch
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Fill out the form below and I'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit}>

        <label style={{ fontWeight: '500', color: '#333' }}>Parent Name</label>
        <input style={inputStyle} type="text" name="parentName" value={formData.parentName} onChange={handleChange} required />

        <label style={{ fontWeight: '500', color: '#333' }}>Email</label>
        <input style={inputStyle} type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required />

        <label style={{ fontWeight: '500', color: '#333' }}>Phone</label>
        <input style={inputStyle} type="text" name="parentPhone" value={formData.parentPhone} onChange={handleChange} />

        <label style={{ fontWeight: '500', color: '#333' }}>Student Name</label>
        <input style={inputStyle} type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />

        <label style={{ fontWeight: '500', color: '#333' }}>Year Level</label>
        <select style={inputStyle} name="yearLevel" value={formData.yearLevel} onChange={handleChange} required>
          <option value="">Select year level</option>
          <option value="7">Year 7</option>
          <option value="8">Year 8</option>
          <option value="9">Year 9</option>
          <option value="10">Year 10</option>
          <option value="11">Year 11</option>
          <option value="12">Year 12</option>
        </select>

        <label style={{ fontWeight: '500', color: '#333' }}>Subject</label>
        <select style={inputStyle} name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">Select subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Both">Both</option>
        </select>

        <label style={{ fontWeight: '500', color: '#333' }}>Message (optional)</label>
        <textarea style={{ ...inputStyle, height: '120px', resize: 'vertical' }} name="message" value={formData.message} onChange={handleChange} />

        <button type="submit" style={{ width: '100%', backgroundColor: '#0a1535', color: 'white', padding: '14px', borderRadius: '6px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Send Enquiry
        </button>

      </form>

      <p style={{ textAlign: 'center', color: '#999', marginTop: '24px', fontSize: '14px' }}>
        Prefer to text? Reach me directly on <strong style={{ color: '#0a1535' }}>0435 298 807</strong>
      </p>

    </div>
  );
}

export default Contact;