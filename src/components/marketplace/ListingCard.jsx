import React from 'react';

const ListingCard = ({ listing }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    border: '1px solid #e5e7eb'
  };

  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transform: 'translateY(-2px)'
  };

  const imageStyle = {
    width: '100%',
    height: '12rem',
    backgroundColor: '#f8fafc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94a3b8',
    fontSize: '3rem',
    borderBottom: '1px solid #e5e7eb'
  };

  const contentStyle = {
    padding: '1.25rem'
  };

  const titleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem',
    lineHeight: '1.4'
  };

  const priceStyle = {
    fontSize: '1.375rem',
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: '0.75rem'
  };

  const descriptionStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const conditionStyle = {
    display: 'inline-block',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    marginBottom: '1rem'
  };

  const sellerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: '#6b7280',
    paddingTop: '0.75rem',
    borderTop: '1px solid #f3f4f6'
  };

  const sellerInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const avatarStyle = {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.625rem',
    fontWeight: '600',
    color: '#16a34a'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={isHovered ? cardHoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageStyle}>
        {listing.image ? (
          <img 
            src={listing.image} 
            alt={listing.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          '📦'
        )}
      </div>
      
      <div style={contentStyle}>
        <h3 style={titleStyle}>{listing.title}</h3>
        <p style={priceStyle}>{listing.price.toLocaleString()} {listing.currency}</p>
        
        <span style={conditionStyle}>
          {listing.condition}
        </span>
        
        <p style={descriptionStyle}>{listing.description}</p>
        
        <div style={sellerStyle}>
          <div style={sellerInfoStyle}>
            <div style={avatarStyle}>
              {listing.seller.name.split(' ').map(n => n[0]).join('')}
            </div>
            <span>{listing.seller.name}</span>
          </div>
          
          <div style={ratingStyle}>
            <span>⭐</span>
            <span>{listing.seller.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;