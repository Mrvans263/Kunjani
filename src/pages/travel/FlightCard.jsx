import React from 'react';
import FlightCard from '../../components/travel/FlightCard';

const Flights = () => {
  // Sample flight data for testing
  const sampleFlight = {
    id: 1,
    type: 'passenger',
    departure: {
      city: 'Moscow',
      airport: 'SVO',
      date: '2024-02-15'
    },
    arrival: {
      city: 'Harare',
      airport: 'HRE',
      date: '2024-02-16'
    },
    airline: 'Aeroflot',
    flightNumber: 'SU721',
    availableSpace: {
      luggage: 15,
      packages: 2
    },
    compensation: 5000,
    contact: {
      name: 'Tendai M.',
      rating: 4.9
    }
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '1rem'
  };

  const testContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Travel & Flights</h1>
          <p style={descriptionStyle}>
            Coordinate travel and send packages between Russia and Zimbabwe
          </p>
        </div>
        <button style={buttonStyle}>
          <span>✈️</span>
          Post Your Flight
        </button>
      </div>

      {/* Test our FlightCard component */}
      <div style={testContainerStyle}>
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <FlightCard flight={sampleFlight} />
        </div>
      </div>
    </div>
  );
};

export default Flights;