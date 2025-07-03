import React from 'react';
import './styles.scss';

const Banner: React.FC = () => {
  return (
    <div className="hero-banner">
      <div className="overlay">
        <h1>Venha conhecer nossas promoções</h1>
        <h2><span>50% Off</span> nos produtos</h2>
        <button className="cta-button">Ver produto</button>
        <div className="neon-sign">BLACK FRIDAY</div>
      </div>
    </div>
  );
};

export default Banner;
