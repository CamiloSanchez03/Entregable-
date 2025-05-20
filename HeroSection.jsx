import React from 'react';
import'./heroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <h1>The whole world awaits.</h1>
        <form className="hero__search">
          <input type="text" placeholder="Search destinations, hotels" />
          <input type="date" />
          <input type="number" placeholder="Guests & Rooms" />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
