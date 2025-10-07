import React, { useState } from 'react';

const CreateFlight = ({ onClose }) => {
  const [formData, setFormData] = useState({
    type: 'passenger',
    departure: {
      city: 'Moscow',
      airport: '',
      date: ''
    },
    arrival: {
      city: 'Harare',
      airport: '',
      date: ''
    },
    airline: '',
    flightNumber: '',
    availableSpace: {
      luggage: 0,
      packages: 0
    },
    compensation: 0,
    notes: ''
  });

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto'
  };

  const headerStyle = {
    padding: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#6b7280'
  };

  const formStyle = {
    padding: '1.5rem'
  };

  const formGroupStyle = {
    marginBottom: '1.5rem'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '1rem'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'vertical'
  };

  const selectStyle = {
    ...inputStyle
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  };

  const sectionStyle = {
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #e5e7eb'
  };

  const sectionTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem'
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '2rem'
  };

  const cancelButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const submitButtonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '#16a34a',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const russianCities = [
    'Moscow', 'Saint Petersburg', 'Kazan', 'Novosibirsk', 
    'Yekaterinburg', 'Nizhny Novgorod', 'Samara'
  ];

  const zimbabweCities = [
    'Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Kwekwe'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else if (name.includes('availableSpace.')) {
      const [, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        availableSpace: {
          ...prev.availableSpace,
          [child]: parseInt(value) || 0
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Flight form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Flight posted successfully!');
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Post Flight/Travel</h2>
          <button onClick={onClose} style={closeButtonStyle}>
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={formStyle}>
          {/* Flight Type */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Travel Type</h3>
            <div style={gridStyle}>
              <label style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '2px solid #d1d5db', borderRadius: '0.5rem', cursor: 'pointer', backgroundColor: formData.type === 'passenger' ? '#f0f9ff' : 'white' }}>
                <input
                  type="radio"
                  name="type"
                  value="passenger"
                  checked={formData.type === 'passenger'}
                  onChange={handleChange}
                  style={{ marginRight: '0.75rem' }}
                />
                <div>
                  <div style={{ fontWeight: '500' }}>👤 Passenger</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Traveling with luggage space</div>
                </div>
              </label>
              
              <label style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: '2px solid #d1d5db', borderRadius: '0.5rem', cursor: 'pointer', backgroundColor: formData.type === 'cargo' ? '#f0f9ff' : 'white' }}>
                <input
                  type="radio"
                  name="type"
                  value="cargo"
                  checked={formData.type === 'cargo'}
                  onChange={handleChange}
                  style={{ marginRight: '0.75rem' }}
                />
                <div>
                  <div style={{ fontWeight: '500' }}>📦 Cargo</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Shipping packages only</div>
                </div>
              </label>
            </div>
          </div>

          {/* Route Information */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Route Information</h3>
            <div style={gridStyle}>
              {/* Departure */}
              <div>
                <h4 style={{ ...labelStyle, fontSize: '1rem' }}>Departure (Russia)</h4>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>City *</label>
                  <select
                    name="departure.city"
                    value={formData.departure.city}
                    onChange={handleChange}
                    required
                    style={selectStyle}
                  >
                    {russianCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Airport</label>
                  <input
                    type="text"
                    name="departure.airport"
                    value={formData.departure.airport}
                    onChange={handleChange}
                    placeholder="e.g., SVO, DME"
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Departure Date *</label>
                  <input
                    type="date"
                    name="departure.date"
                    value={formData.departure.date}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Arrival */}
              <div>
                <h4 style={{ ...labelStyle, fontSize: '1rem' }}>Arrival (Zimbabwe)</h4>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>City *</label>
                  <select
                    name="arrival.city"
                    value={formData.arrival.city}
                    onChange={handleChange}
                    required
                    style={selectStyle}
                  >
                    {zimbabweCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Airport</label>
                  <input
                    type="text"
                    name="arrival.airport"
                    value={formData.arrival.airport}
                    onChange={handleChange}
                    placeholder="e.g., HRE, BUQ"
                    style={inputStyle}
                  />
                </div>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Arrival Date *</label>
                  <input
                    type="date"
                    name="arrival.date"
                    value={formData.arrival.date}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Flight Details */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Flight Details</h3>
            <div style={gridStyle}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Airline</label>
                <input
                  type="text"
                  name="airline"
                  value={formData.airline}
                  onChange={handleChange}
                  placeholder="e.g., Aeroflot, Ethiopian Airlines"
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Flight Number</label>
                <input
                  type="text"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  placeholder="e.g., SU721"
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Available Space */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Available Space</h3>
            <div style={gridStyle}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Luggage Space (kg) *</label>
                <input
                  type="number"
                  name="availableSpace.luggage"
                  value={formData.availableSpace.luggage}
                  onChange={handleChange}
                  required
                  min="0"
                  style={inputStyle}
                />
              </div>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Number of Packages *</label>
                <input
                  type="number"
                  name="availableSpace.packages"
                  value={formData.availableSpace.packages}
                  onChange={handleChange}
                  required
                  min="0"
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Compensation */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Compensation</h3>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Compensation per kg (RUB) *</label>
              <input
                type="number"
                name="compensation"
                value={formData.compensation}
                onChange={handleChange}
                required
                min="0"
                placeholder="e.g., 5000"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Notes */}
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Additional Information</h3>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions, restrictions, or additional information..."
                style={textareaStyle}
              />
            </div>
          </div>

          {/* Buttons */}
          <div style={buttonGroupStyle}>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>
              Cancel
            </button>
            <button type="submit" style={submitButtonStyle}>
              Post Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFlight;