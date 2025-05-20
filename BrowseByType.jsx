import React from 'react';
import './browseByType.scss';



import img1 from '../assets/hotels.jpg';
import img2 from '../assets/aparments.jpg'; 
import img3 from '../assets/resorts.jpg';
import img4 from '../assets/villas.jpg';

const types = [
  { image: img1, name: 'Hotels' },
  { image: img2, name: 'Apartments' },
  { image: img3, name: 'Resorts' },
  { image: img4, name: 'Villas' },
];

const BrowseByType = () => {
  return (
    <section className="types">
      <h2>Browse by property type</h2>
      <div className="types__grid">
        {types.map((type, i) => (
          <div key={i} className="types__card">
            <img src={type.image} alt={type.name} />
            <span>{type.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseByType;
