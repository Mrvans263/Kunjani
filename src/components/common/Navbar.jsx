import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Feed', href: '/feed', icon: '📱' },
    { name: 'Marketplace', href: '/marketplace', icon: '🛒' },
    { name: 'Flights', href: '/flights', icon: '✈️' },
    { name: 'Money', href: '/money', icon: '💰' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo Section */}
        <Link to="/" className="logo">
          <span className="logo-emoji">👋</span>
          <h1 className="logo-text">Kunjani</h1>
          <span className="logo-subtitle">Zimbabwean Students in Russia</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
            >
              <span style={{ marginRight: '0.5rem' }}>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* User Section */}
        <div className="user-section">
          <div className="user-avatar">👋</div>
          <span className="user-name">Welcome!</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;