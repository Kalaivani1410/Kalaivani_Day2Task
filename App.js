import React from 'react';
import CardComponent from './components/CardComponent';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px', color: '#6b4e3d' }}>
        Welcome to Our Café
      </h1>
      <CardComponent />
    </div>
  );
};

export default App;
