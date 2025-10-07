import React, { useState } from 'react';

const TravelFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [flightType, setFlightType] = useState('all');
  const [departureCity, setDepartureCity] = useState('all');
  const [arrivalCity, setArrivalCity] = useState('all');
  const [maxCompensation, setMaxCompensation] = useState('');

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    marginBottom: '2rem'
  };

  const searchInputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    marginBottom: '1rem'
  };

  const filtersContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    alignItems: 'end'
  };

  const filterGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'
  };

  const selectStyle = {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    backgroundColor: 'white'
  };

  const inputStyle = {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const russianCities = [
    { value: 'all', label: 'All Cities' },
    { value: 'Moscow', label: 'Moscow' },
    { value: 'Saint Petersburg', label: 'Saint Petersburg' },
    { value: 'Kazan', label: 'Kazan' },
    { value: 'Novosibirsk', label: 'Novosibirsk' },
    { value: 'Yekaterinburg', label: 'Yekaterinburg' }
  ];

  const zimbabweCities = [
    { value: 'all', label: 'All Cities' },
    { value: 'Harare', label: 'Harare' },
    { value: 'Bulawayo', label: 'Bulawayo' },
    { value: 'Mutare', label: 'Mutare' },
    { value: 'Gweru', label: 'Gweru' }
  ];

  const flightTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'passenger', label: 'Passenger' },
    { value: 'cargo', label: 'Cargo' }
  ];

  const handleReset = () => {
    setSearchTerm('');
    setFlightType('all');
    setDepartureCity('all');
    setArrivalCity('all');
    setMaxCompensation('');
  };

  return (
    <div style={containerStyle}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by airline, flight number, or traveler name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />

      {/* Filters */}
      <div style={filtersContainerStyle}>
        {/* Flight Type */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>Flight Type</label>
          <select 
            value={flightType} 
            onChange={(e) => setFlightType(e.target.value)}
            style={selectStyle}
          >
            {flightTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Departure City */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>From (Russia)</label>
          <select 
            value={departureCity} 
            onChange={(e) => setDepartureCity(e.target.value)}
            style={selectStyle}
          >
            {russianCities.map(city => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        {/* Arrival City */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>To (Zimbabwe)</label>
          <select 
            value={arrivalCity} 
            onChange={(e) => setArrivalCity(e.target.value)}
            style={selectStyle}
          >
            {zimbabweCities.map(city => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        {/* Max Compensation */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>Max Compensation (RUB)</label>
          <input
            type="number"
            placeholder="Any amount"
            value={maxCompensation}
            onChange={(e) => setMaxCompensation(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Reset Button */}
        <div style={filterGroupStyle}>
          <button onClick={handleReset} style={buttonStyle}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelFilters;