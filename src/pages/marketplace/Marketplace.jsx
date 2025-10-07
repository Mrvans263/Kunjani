import React, { useState } from 'react';
import ListingCard from '../../components/marketplace/ListingCard';
import MarketplaceFilters from '../../components/marketplace/MarketplaceFilters';
import CreateListing from '../../components/marketplace/CreateListing';

const Marketplace = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Winter Jacket - Size L',
      description: 'Hardly used winter jacket, perfect for Russian winter. Waterproof and warm.',
      price: 4500,
      currency: 'RUB',
      condition: 'like new',
      category: 'clothing',
      seller: {
        name: 'Tinashe M.',
        rating: 4.8,
        location: 'Moscow'
      },
      image: null
    },
    {
      id: 2,
      title: 'MacBook Air 2020',
      description: 'Selling my MacBook Air before going back home. 256GB, excellent condition.',
      price: 65000,
      currency: 'RUB',
      condition: 'excellent',
      category: 'electronics',
      seller: {
        name: 'Kudzai M.',
        rating: 4.9,
        location: 'Saint Petersburg'
      },
      image: null
    },
    {
      id: 3,
      title: 'Russian Language Books',
      description: 'Complete set of Russian language learning books for beginners to advanced.',
      price: 1200,
      currency: 'RUB',
      condition: 'good',
      category: 'books',
      seller: {
        name: 'Farai C.',
        rating: 4.7,
        location: 'Kazan'
      },
      image: null
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem'
  };

  const handleCreateListing = (newListing) => {
    // In a real app, you would send this to your backend
    const listingWithId = {
      ...newListing,
      id: Date.now(),
      seller: {
        name: 'You',
        rating: 5.0,
        location: 'Your City'
      },
      image: null
    };
    setListings([listingWithId, ...listings]);
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Marketplace</h1>
          <p style={descriptionStyle}>
            Buy and sell items within the Zimbabwean student community in Russia
          </p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          style={buttonStyle}
        >
          <span>+</span>
          Sell Item
        </button>
      </div>

      {/* Filters Section */}
      <MarketplaceFilters />

      {/* Listings Grid */}
      <div style={gridStyle}>
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Create Listing Modal */}
      {showCreateForm && (
        <CreateListing 
          onClose={() => setShowCreateForm(false)}
          onCreate={handleCreateListing}
        />
      )}
    </div>
  );
};

export default Marketplace;