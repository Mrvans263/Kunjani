import React from 'react';
import TransactionCard from '../../components/money/TransactionCard';
import MoneyFilters from '../../components/money/MoneyFilters';

const Money = () => {
  // Sample transactions data showing the peer-to-peer system
  const transactions = [
    {
      id: 1,
      type: 'send',
      amount: 5000,
      fromCurrency: 'RUB',
      toCurrency: 'USD',
      exchangeRate: 0.011,
      recipientAmount: 55,
      recipient: {
        name: 'Maria M.',
        phone: '+263-77-123-4567',
        location: 'Harare'
      },
      status: 'pending',
      date: '2024-01-15',
      fee: 250,
      description: 'Send money to family'
    },
    {
      id: 2,
      type: 'receive',
      amount: 200,
      fromCurrency: 'USD',
      toCurrency: 'RUB',
      exchangeRate: 90.5,
      recipientAmount: 18100,
      sender: {
        name: 'John D.',
        phone: '+263-77-987-6543',
        location: 'Bulawayo'
      },
      status: 'pending',
      date: '2024-01-14',
      fee: 10,
      description: 'Receive from business'
    },
    {
      id: 3,
      type: 'send',
      amount: 10000,
      fromCurrency: 'RUB',
      toCurrency: 'ZWL',
      exchangeRate: 4.2,
      recipientAmount: 42000,
      recipient: {
        name: 'Tendai C.',
        phone: '+263-71-555-1234',
        location: 'Mutare'
      },
      status: 'completed',
      date: '2024-01-13',
      fee: 500,
      description: 'School fees payment'
    },
    {
      id: 4,
      type: 'receive',
      amount: 500,
      fromCurrency: 'USD',
      toCurrency: 'RUB',
      exchangeRate: 90.5,
      recipientAmount: 45250,
      sender: {
        name: 'Sarah K.',
        phone: '+263-78-333-7890',
        location: 'Gweru'
      },
      status: 'processing',
      date: '2024-01-12',
      fee: 25,
      description: 'Receive payment for services'
    }
  ];

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

  const explanationStyle = {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    marginBottom: '2rem'
  };

  const explanationTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#166534',
    marginBottom: '0.5rem'
  };

  const explanationTextStyle = {
    color: '#15803d',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Money Transfer</h1>
          <p style={descriptionStyle}>
            Peer-to-peer money transfers between Russia and Zimbabwe
          </p>
        </div>
        <button style={buttonStyle}>
          <span>💸</span>
          New Transfer
        </button>
      </div>

      {/* Explanation of the P2P System */}
      <div style={explanationStyle}>
        <h3 style={explanationTitleStyle}>How It Works</h3>
        <p style={explanationTextStyle}>
          💡 <strong>Peer-to-Peer System:</strong> Connect with other students to exchange money without international fees.
          <br/>
          • <strong>In Russia:</strong> Find someone who wants to send money to Zimbabwe and someone who wants to receive from Zimbabwe
          <br/>
          • <strong>In Zimbabwe:</strong> The system matches senders and receivers locally
          <br/>
          • <strong>Result:</strong> You exchange money locally in both countries, avoiding international transfer costs!
        </p>
      </div>

      {/* Filters Section */}
      <MoneyFilters />

      {/* Transactions Grid */}
      <div style={gridStyle}>
        {transactions.map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Money;