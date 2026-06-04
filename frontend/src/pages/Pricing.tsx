import React from 'react';

function Pricing() {
  return (
    <div style={{ padding: '64px 32px', maxWidth: '900px', margin: '0 auto' }}>
      
      <h1 style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', color: '#0a1535', marginBottom: '12px' }}>
        Pricing
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '48px', fontSize: '16px' }}>
        All sessions are 1-on-1 and tailored to your needs.
      </p>

      {/* Pricing cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>

        {/* Year 7-9 */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>Year 7–9</p>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#0a1535', margin: '0' }}>$60</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '16px' }}>per hour · in-person</p>
          <p style={{ color: '#f0c040', fontWeight: '500' }}>$50/hr online</p>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '12px' }}>Maths · English</p>
        </div>

        {/* Year 10 */}
        <div style={{ border: '2px solid #0a1535', borderRadius: '12px', padding: '32px', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0a1535', color: 'white', fontSize: '11px', padding: '4px 12px', borderRadius: '20px' }}>
            Most popular
          </div>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>Year 10</p>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#0a1535', margin: '0' }}>$70</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '16px' }}>per hour · in-person</p>
          <p style={{ color: '#f0c040', fontWeight: '500' }}>$60/hr online</p>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '12px' }}>Maths · English</p>
        </div>

        {/* Year 11-12 */}
        <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>Year 11–12</p>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#0a1535', margin: '0' }}>$80</p>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '16px' }}>per hour · in-person</p>
          <p style={{ color: '#f0c040', fontWeight: '500' }}>$70/hr online</p>
          <p style={{ color: '#666', fontSize: '13px', marginTop: '12px' }}>Maths · English</p>
        </div>

      </div>

      {/* Note */}
      <div style={{ backgroundColor: '#f8f8f8', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#666', margin: 0 }}>
          Not sure which option is right for you? <a href="/contact" style={{ color: '#0a1535', fontWeight: 'bold' }}>Book a free 15-min chat</a> and we'll figure it out together.
        </p>
      </div>

    </div>
  );
}

export default Pricing;