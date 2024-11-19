import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = () => {
  return (
    <div className="card-container">
      <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/030/166/747/small_2x/the-best-coffee-shops-in-the-world-ai-generated-photo.jpg" 
        alt="Cafe" 
        className="card-image" 
      />
      <h3 className="card-title">Cozy Café</h3>
      <p className="card-description">
        A perfect spot to enjoy freshly brewed coffee and delicious pastries. Visit us for a cozy experience!
      </p>
      <button className="card-button">Order Now</button>
    </div>
  );
};

export default CardComponent;
