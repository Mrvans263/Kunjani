import React from 'react';

const TransactionCard = ({ transaction }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    border: '1px solid #e5e7eb',
    borderLeft: `4px solid ${transaction.type === 'send' ? '#dc2626' : '#16a34a'}`
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

  const typeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const iconStyle = {
    fontSize: '1.5rem'
  };

  const typeTextStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    textTransform: 'capitalize'
  };

  const sendTypeStyle = {
    ...typeTextStyle,
    color: '#dc2626'
  };

  const receiveTypeStyle = {
    ...typeTextStyle,
    color: '#16a34a'
  };

  const statusStyle = {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500'
  };

  const statusCompletedStyle = {
    ...statusStyle,
    backgroundColor: '#dcfce7',
    color: '#166534'
  };

  const statusPendingStyle = {
    ...statusStyle,
    backgroundColor: '#fef3c7',
    color: '#92400e'
  };

  const statusProcessingStyle = {
    ...statusStyle,
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  };

  const amountsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const amountGroupStyle = {
    textAlign: 'center'
  };

  const amountLabelStyle = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  };

  const amountStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  const sendAmountStyle = {
    ...amountStyle,
    color: '#111827'
  };

  const receiveAmountStyle = {
    ...amountStyle,
    color: '#16a34a'
  };

  const exchangeStyle = {
    textAlign: 'center',
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#f8fafc',
    borderRadius: '0.375rem'
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
    backgroundColor: transaction.type === 'send' ? '#fef2f2' : '#f0fdf4',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: transaction.type === 'send' ? '#dc2626' : '#16a34a'
  };

  const contactDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const nameStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  };

  const phoneStyle = {
    fontSize: '0.75rem',
    color: '#6b7280'
  };

  const locationStyle = {
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

  const formatCurrency = (amount, currency) => {
    if (currency === 'ZWL') {
      return `ZWL ${amount.toLocaleString()}`;
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed': return statusCompletedStyle;
      case 'pending': return statusPendingStyle;
      case 'processing': return statusProcessingStyle;
      default: return statusStyle;
    }
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
          <div style={typeStyle}>
            <div style={iconStyle}>
              {transaction.type === 'send' ? '📤' : '📥'}
            </div>
            <div style={transaction.type === 'send' ? sendTypeStyle : receiveTypeStyle}>
              {transaction.type} {transaction.fromCurrency} → {transaction.toCurrency}
            </div>
          </div>
          
          <div style={getStatusStyle(transaction.status)}>
            {transaction.status}
          </div>
        </div>

        {/* Amounts */}
        <div style={amountsStyle}>
          <div style={amountGroupStyle}>
            <div style={amountLabelStyle}>
              You {transaction.type === 'send' ? 'send' : 'receive'}
            </div>
            <div style={sendAmountStyle}>
              {formatCurrency(transaction.amount, transaction.fromCurrency)}
            </div>
          </div>
          
          <div style={amountGroupStyle}>
            <div style={amountLabelStyle}>
              {transaction.type === 'send' ? 'Recipient gets' : 'Sender sent'}
            </div>
            <div style={receiveAmountStyle}>
              {formatCurrency(transaction.recipientAmount, transaction.toCurrency)}
            </div>
          </div>
        </div>

        {/* Exchange Rate */}
        <div style={exchangeStyle}>
          Exchange Rate: 1 {transaction.fromCurrency} = {transaction.exchangeRate} {transaction.toCurrency}
        </div>

        {/* Contact Information */}
        <div style={contactStyle}>
          <div style={contactInfoStyle}>
            <div style={avatarStyle}>
              {(transaction.recipient?.name || transaction.sender?.name)?.split(' ').map(n => n[0]).join('')}
            </div>
            <div style={contactDetailsStyle}>
              <div style={nameStyle}>
                {transaction.type === 'send' ? transaction.recipient?.name : transaction.sender?.name}
              </div>
              <div style={phoneStyle}>
                {transaction.type === 'send' ? transaction.recipient?.phone : transaction.sender?.phone}
              </div>
              <div style={locationStyle}>
                📍 {transaction.type === 'send' ? transaction.recipient?.location : transaction.sender?.location}
              </div>
            </div>
          </div>
          
          {transaction.status === 'pending' && (
            <button style={buttonStyle}>
              {transaction.type === 'send' ? 'Send' : 'Receive'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Add the default export at the end
export default TransactionCard;