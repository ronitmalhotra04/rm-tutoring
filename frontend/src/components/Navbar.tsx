import React from 'react';
import { Link } from 'react-router-dom';

// This is the navigation bar that appears at the top of every page
function Navbar() {
  return (
    <nav style={{ backgroundColor: '#0a1535', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      {/* Logo on the left */}
      <div style={{ color: '#f0c040', fontWeight: 'bold', fontSize: '24px' }}>
        RM <span style={{ color: 'white' }}>Tutoring</span>
      </div>

      {/* Links on the right */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/pricing" style={{ color: 'white', textDecoration: 'none' }}>Pricing</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;