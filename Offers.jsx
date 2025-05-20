import React from 'react';
import './offers.scss'; // Assuming you have a CSS file for styling


import offer1 from '../assets/offer-1.jpg';
import offer2 from '../assets/offer-2.jpg';

const offers = [
  {
    title: 'Escape savings on flights with us',
    description: 'Find exclusive flight deals and save up to 30%.',
    image: offer1,
  },
  {
    title: 'Enjoy up to 50% off at resorts',
    description: 'Unwind with massive savings at top resorts.',
    image: offer2,
  },
];

const Offers = () => {
  return (
    <section className="offers">
      <h2>Offers</h2>
      <div className="offers__grid">
        {offers.map((offer, index) => (
          <div key={index} className="offers__card">
            <img src={offer.image} alt={offer.title} />
            <div className="offers__content">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
