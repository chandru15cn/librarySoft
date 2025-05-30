import React from 'react';

// Basic styling for the section and individual pricing tiers
const sectionStyle: React.CSSProperties = {
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#f9f9f9', // Light grey background for this section
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

const tierContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center', // Distribute tiers evenly
  flexWrap: 'wrap', // Allow tiers to wrap on smaller screens
};

const tierStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  width: '350px', // Fixed width for each tier
  textAlign: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const tiers = [
  {
    name: 'Free Plan',
    price: 'Free', // Updated price
    features: ['Up to 500 Books', 'Basic Member Management', 'Single Admin User', 'Community Support'],
    buttonText: '', // Updated button text
  },
  {
    name: 'Pro Plan',
    price: '₹1000/month', // Updated price
    features: ['Up to 10,000 Books', 'Advanced Member Management', 'Reporting Tools', 'Email Support', 'Multiple Admin Users'],
    buttonText: 'Choose Pro',
  },
];

const PricingTable: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Pricing Plans</h2>
      <div style={tierContainerStyle}>
        {tiers.map((tier, index) => (
          <div key={index} style={tierStyle}>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '10px 0' }}>{tier.price}</p>
            <ol style={{ listStyleType: 'decimal', paddingLeft: '40px', textAlign: 'left' }}>
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} style={{ margin: '5px 0' }}>{feature}</li>
              ))}
            </ol>
            <button style={tier.name === 'Free Plan' ? {
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: 'transparent',
              color: 'transparent',
              border: 'none',
              cursor: 'default',
            } : {
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: '#5cb85c', // Green color for button
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
