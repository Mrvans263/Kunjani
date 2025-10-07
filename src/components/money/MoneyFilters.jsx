import React, { useState } from 'react';

const MoneyFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactionType, setTransactionType] = useState('all');
  const [status, setStatus] = useState('all');
  const [fromCurrency, setFromCurrency] = useState('all');
  const [toCurrency, setToCurrency] = useState('all');

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

  const transactionTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'send', label: 'Send Money' },
    { value: 'receive', label: 'Receive Money' }
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'completed', label: 'Completed' }
  ];

  const currencies = [
    { value: 'all', label: 'Any Currency' },
    { value: 'RUB', label: 'Russian Ruble (RUB)' },
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'ZWL', label: 'Zimbabwean Dollar (ZWL)' },
    { value: 'EUR', label: 'Euro (EUR)' }
  ];

  const handleReset = () => {
    setSearchTerm('');
    setTransactionType('all');
    setStatus('all');
    setFromCurrency('all');
    setToCurrency('all');
  };

  return (
    <div style={containerStyle}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, phone, or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />

      {/* Filters */}
      <div style={filtersContainerStyle}>
        {/* Transaction Type */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>Transaction Type</label>
          <select 
            value={transactionType} 
            onChange={(e) => setTransactionType(e.target.value)}
            style={selectStyle}
          >
            {transactionTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>Status</label>
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            style={selectStyle}
          >
            {statuses.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* From Currency */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>From Currency</label>
          <select 
            value={fromCurrency} 
            onChange={(e) => setFromCurrency(e.target.value)}
            style={selectStyle}
          >
            {currencies.map(currency => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div style={filterGroupStyle}>
          <label style={labelStyle}>To Currency</label>
          <select 
            value={toCurrency} 
            onChange={(e) => setToCurrency(e.target.value)}
            style={selectStyle}
          >
            {currencies.map(currency => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
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

// Add the default export at the end
export default MoneyFilters;