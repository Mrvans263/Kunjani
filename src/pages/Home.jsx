import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)',
  };

  const headerStyle = {
    padding: '4rem 1rem 6rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
    color: 'white',
    borderRadius: '0 0 2rem 2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #f0fdf4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto 2rem',
    lineHeight: 1.6
  };

  const ctaButtonStyle = {
    backgroundColor: 'white',
    color: '#16a34a',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const featuresSectionStyle = {
    padding: '4rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: '3rem'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #e5e7eb'
  };

  const featureIconStyle = {
    fontSize: '3rem',
    marginBottom: '1rem'
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem'
  };

  const featureDescStyle = {
    color: '#6b7280',
    lineHeight: 1.6,
    marginBottom: '1.5rem'
  };

  const featureLinkStyle = {
    color: '#16a34a',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const statsSectionStyle = {
    backgroundColor: 'white',
    padding: '4rem 1rem',
    margin: '2rem 0',
    borderRadius: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#16a34a',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    color: '#6b7280',
    fontSize: '1.125rem'
  };

  const communitySectionStyle = {
    padding: '4rem 1rem',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: '2rem',
    margin: '2rem 0'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredButton, setHoveredButton] = React.useState(false);

  const features = [
    {
      icon: '💬',
      title: 'Social Feed',
      description: 'Connect with fellow Zimbabwean students, share experiences, and stay updated with community news and events.',
      link: '/feed',
      color: '#3b82f6'
    },
    {
      icon: '💰',
      title: 'Money Transfer',
      description: 'Send and receive money securely between Russia and Zimbabwe with competitive exchange rates.',
      link: '/money',
      color: '#10b981'
    },
    {
      icon: '🛒',
      title: 'Marketplace',
      description: 'Buy and sell items within our trusted community. Find everything from textbooks to winter gear.',
      link: '/marketplace',
      color: '#f59e0b'
    },
    {
      icon: '✈️',
      title: 'Travel & Flights',
      description: 'Coordinate travel plans, send packages home, and find trusted travel companions.',
      link: '/flights',
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Active Students' },
    { number: '₽15M+', label: 'Money Transferred' },
    { number: '1,200+', label: 'Successful Trades' },
    { number: '50+', label: 'Cities in Russia' }
  ];

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <header style={headerStyle}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={titleStyle}>
            Kunjani
          </h1>
          <p style={subtitleStyle}>
            The all-in-one platform connecting Zimbabwean students across Russia. 
            Stay connected, transfer money safely, trade items, and coordinate travel - all in one trusted community.
          </p>
          <Link 
            to="/feed" 
            
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            style={{
              ...ctaButtonStyle,
              ...(hoveredButton ? buttonHoverStyle : {})
            }}
          >
            Join Our Community →
          </Link>
        </div>
      </header>

      {/* Stats Section */}
      <section style={statsSectionStyle}>
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={statNumberStyle}>{stat.number}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <h2 style={sectionTitleStyle}>Everything You Need in One Platform</h2>
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                ...featureCardStyle,
                ...(hoveredCard === index ? cardHoverStyle : {}),
                borderTop: `4px solid ${feature.color}`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={featureIconStyle}>{feature.icon}</div>
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
              <Link to={feature.link} style={featureLinkStyle}>
                Explore <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section style={communitySectionStyle}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ ...sectionTitleStyle, marginBottom: '1rem' }}>
            Join Our Growing Community
          </h2>
          <p style={{ ...subtitleStyle, color: '#6b7280', marginBottom: '2rem' }}>
            From Moscow to Vladivostok, connect with fellow Zimbabweans studying across Russia. 
            Share experiences, help each other, and build lasting connections.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/feed" 
              style={{
                ...ctaButtonStyle,
                backgroundColor: '#16a34a',
                color: 'white'
              }}
            >
              Get Started
            </Link>
            <Link 
              to="/marketplace" 
              style={{
                ...ctaButtonStyle,
                backgroundColor: 'transparent',
                color: '#16a34a',
                border: '2px solid #16a34a'
              }}
            >
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        color: '#6b7280',
        borderTop: '1px solid #e5e7eb',
        marginTop: '4rem'
      }}>
        <p>Built for the Zimbabwean student community in Russia • Safe • Secure • Trusted</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Kunjani - "How are you?" in Shona - Connecting our community
        </p>
      </footer>
    </div>
  );
};

export default Home;