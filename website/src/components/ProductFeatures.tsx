import React from 'react';

// Basic styling for the section and individual features
const sectionStyle: React.CSSProperties = {
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#ffffff', // White background for this section
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
};

const featureStyle: React.CSSProperties = {
  margin: '10px', // Added margin for spacing on all sides
  padding: '10px',
  border: '1px solid #f0f0f0',
  borderRadius: '5px',
  width: 'calc(50% - 20px)', // For 2 columns, accounting for margin
  boxSizing: 'border-box', // Ensure padding and border are included in the width calculation
};

const features = [
  { title: 'Intuitive Interface', description: 'Manage your library with an easy-to-use and modern interface.' },
  { title: 'Advanced Search', description: 'Quickly find books, authors, and members with powerful search capabilities.' },
  { title: 'Member Management', description: 'Keep track of members, borrowing history, and notifications seamlessly.' },
  { title: 'Reporting & Analytics', description: 'Gain insights into library operations with comprehensive reports.' },
];

const ProductFeatures: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Key Features</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {features.map((feature, index) => (
          <div key={index} style={featureStyle}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
