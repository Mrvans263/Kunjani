import React from 'react';

const FlightCard = ({ flight }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    border: '1px solid #e5e7eb',
    borderLeft: '4px solid #16a34a'
  };

  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transform: 'translateY(-2px)'
  };

  const contentStyle = {
    padding: '1.5rem'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  };

  const typeBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    marginBottom: '0.5rem'
  };

  const passengerBadgeStyle = {
    ...typeBadgeStyle,
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  };

  const cargoBadgeStyle = {
    ...typeBadgeStyle,
    backgroundColor: '#dcfce7',
    color: '#166534'
  };

  const airlineStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827'
  };

  const compensationStyle = {
    textAlign: 'right'
  };

  const priceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#16a34a'
  };

  const priceLabelStyle = {
    fontSize: '0.75rem',
    color: '#6b7280'
  };

  const routeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  };

  const locationStyle = {
    textAlign: 'center'
  };

  const cityStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#111827'
  };

  const airportStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const dateStyle = {
    fontSize: '0.75rem',
    color: '#9ca3af'
  };

  const arrowStyle = {
    color: '#d1d5db',
    fontSize: '1.5rem',
    margin: '0 1rem'
  };

  const spaceStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem'
  };

  const spaceItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
    marginBottom: '0.25rem'
  };

  const contactStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #f3f4f6'
  };

  const contactInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const avatarStyle = {
    width: '2.5rem',
    height: '2.5rem',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#16a34a'
  };

  const nameStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  };

  const ratingStyle = {
    fontSize: '0.75rem',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
      style={isHovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div>
            <div style={flight.type === 'passenger' ? passengerBadgeStyle : cargoBadgeStyle}>
              {flight.type === 'passenger' ? '👤 Passenger' : '📦 Cargo'}
            </div>
            <h3 style={airlineStyle}>{flight.airline} {flight.flightNumber}</h3>
          </div>
          
          <div style={compensationStyle}>
            <div style={priceStyle}>{flight.compensation.toLocaleString()} RUB</div>
            <div style={priceLabelStyle}>per kg</div>
          </div>
        </div>

        {/* Route */}
        <div style={routeStyle}>
          <div style={locationStyle}>
            <div style={cityStyle}>{flight.departure.city}</div>
            <div style={airportStyle}>{flight.departure.airport}</div>
            <div style={dateStyle}>{formatDate(flight.departure.date)}</div>
          </div>
          
          <div style={arrowStyle}>→</div>
          
          <div style={locationStyle}>
            <div style={cityStyle}>{flight.arrival.city}</div>
            <div style={airportStyle}>{flight.arrival.airport}</div>
            <div style={dateStyle}>{formatDate(flight.arrival.date)}</div>
          </div>
        </div>

        {/* Available Space */}
        <div style={spaceStyle}>
          <div style={spaceItemStyle}>
            <span>Luggage Space:</span>
            <span style={{ fontWeight: '600' }}>{flight.availableSpace.luggage} kg</span>
          </div>
          <div style={spaceItemStyle}>
            <span>Packages:</span>
            <span style={{ fontWeight: '600' }}>{flight.availableSpace.packages} items</span>
          </div>
        </div>

        {/* Contact & Action */}
        <div style={contactStyle}>
          <div style={contactInfoStyle}>
            <div style={avatarStyle}>
              {flight.contact.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style={nameStyle}>{flight.contact.name}</div>
              <div style={ratingStyle}>
                ⭐ {flight.contact.rating}
              </div>
            </div>
          </div>
          
          <button style={buttonStyle}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;