import React from 'react';
import './topDestinations.scss'

import image1 from '../assets/paris.jpg';
import image2 from '../assets/sydney.jpg';
import image3 from '../assets/kerry.jpg';
import image4 from '../assets/bali.jpg';

const destinations = [
  { image: image1, name: "Paris, France" },
  { image: image2, name: "Sedney, Australia" },
  { image: image3, name: "Kerry, Ireland" },
  { image: image4, name: "Bali, Indonesia" },
];

const TopDestinations = () => {
  return (
    <section className="destinations">
      <h2>Top Vacation Destinations</h2>
      <div className="destinations__grid">
        {destinations.map((d, i) => (
          <div key={i} className="destinations__card">
            <div className="destinations__image-wrapper">
              <img src={d.image} alt={d.name} />
              <span className="destinations__name">{d.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
