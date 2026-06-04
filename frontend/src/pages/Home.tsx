import React from 'react';

// This is the main landing page parents will see
function Home() {
  return (
    <div>

      {/* Hero section - the big intro at the top */}
      <div style={{ backgroundColor: '#0a1535', padding: '80px 32px', textAlign: 'center' }}>
        <p style={{ color: '#f0c040', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '14px' }}>
          Private Tutoring — Sydney
        </p>
        <h1 style={{ color: 'white', fontSize: '64px', fontWeight: 'bold', margin: '16px 0' }}>
          Meet the <span style={{ color: '#f0c040' }}>Tutor</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
          I'm Ronit — a North Sydney Boys graduate with a 99.40 ATAR, 
          currently studying Software Engineering at UNSW. With 3+ years 
          of tutoring experience, I turn confusion into confidence.
        </p>

        {/* Credential badges */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {['99.40 ATAR', '98 Maths Advanced', '97 English Advanced', '96 Extension 1', '3+ Years Experience'].map((badge) => (
            <span key={badge} style={{ backgroundColor: 'rgba(240,192,64,0.15)', border: '1px solid rgba(240,192,64,0.4)', color: '#f0c040', padding: '6px 16px', borderRadius: '20px', fontSize: '13px' }}>
              {badge}
            </span>
          ))}
        </div>

        {/* Call to action buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="/contact" style={{ backgroundColor: '#f0c040', color: '#0a1535', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            Book a Free Chat
          </a>
          <a href="/pricing" style={{ backgroundColor: 'transparent', color: 'white', padding: '12px 28px', borderRadius: '4px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
            View Pricing
          </a>
        </div>
      </div>

      {/* Subjects section */}
      <div style={{ padding: '64px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#0a1535' }}>
          Subjects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[
            'Year 7-10 Mathematics',
            'Mathematics Standard',
            'Mathematics Advanced',
            'Mathematics Extension 1',
            'Year 7-10 English',
            'English Advanced',
          ].map((subject) => (
            <div key={subject} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', textAlign: 'center', color: '#333' }}>
              {subject}
            </div>
          ))}
        </div>
      </div>

      {/* Why choose me section */}
      <div style={{ backgroundColor: '#f8f8f8', padding: '64px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#0a1535' }}>
            Why Choose Me?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {[
              'Scored 98 Maths Advanced, 97 English Advanced & 96 Extension 1',
              'Know exactly what examiners are looking for',
              'Lessons tailored to your weaknesses and pace',
              'Clear, simple explanations that actually click',
              'Step-by-step — you\'ll always know what went wrong',
              'Patient, 1-on-1, full focus every session',
            ].map((point) => (
              <div key={point} style={{ backgroundColor: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#f0c040', fontWeight: 'bold', fontSize: '18px' }}>✓</span>
                <p style={{ color: '#333', margin: 0 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;