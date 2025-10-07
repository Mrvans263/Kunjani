import React, { useState } from 'react';
import FlightCard from '../../components/travel/FlightCard';
import TravelFilters from '../../components/travel/TravelFilters';
import CreateFlight from '../../components/travel/CreateFlight';

const Flights = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [flights, setFlights] = useState([
    {
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
    },
    {
      id: 2,
      type: 'cargo',
      departure: {
        city: 'Saint Petersburg',
        airport: 'LED',
        date: '2024-02-20'
      },
      arrival: {
        city: 'Harare',
        airport: 'HRE',
        date: '2024-02-21'
      },
      airline: 'Ethiopian Airlines',
      flightNumber: 'ET423',
      availableSpace: {
        luggage: 30,
        packages: 5
      },
      compensation: 4500,
      contact: {
        name: 'Ruvimbo K.',
        rating: 4.8
      }
    },
    {
      id: 3,
      type: 'passenger',
      departure: {
        city: 'Kazan',
        airport: 'KZN',
        date: '2024-03-05'
      },
      arrival: {
        city: 'Bulawayo',
        airport: 'BUQ',
        date: '2024-03-06'
      },
      airline: 'Turkish Airlines',
      flightNumber: 'TK874',
      availableSpace: {
        luggage: 10,
        packages: 1
      },
      compensation: 5500,
      contact: {
        name: 'Takudzwa N.',
        rating: 4.7
      }
    }
  ]);

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
    gap: '1.5rem'
  };

  const handleCreateFlight = (newFlight) => {
    // In a real app, you would send this to your backend
    const flightWithId = {
      ...newFlight,
      id: Date.now(),
      contact: {
        name: 'You',
        rating: 5.0
      }
    };
    setFlights([flightWithId, ...flights]);
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
        <button 
          onClick={() => setShowCreateForm(true)}
          style={buttonStyle}
        >
          <span>✈️</span>
          Post Your Flight
        </button>
      </div>

      {/* Filters Section */}
      <TravelFilters />

      {/* Flights Grid */}
      <div style={gridStyle}>
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>

      {/* Create Flight Modal */}
      {showCreateForm && (
        <CreateFlight 
          onClose={() => setShowCreateForm(false)}
          onCreate={handleCreateFlight}
        />
      )}
    </div>
  );
};

export default Flights;