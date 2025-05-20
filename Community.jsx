import React from 'react';
import './community.scss';

import img1 from '../assets/community-1.jpg';
import img2 from '../assets/community-2.jpg';
import img3 from '../assets/community-3.jpg';
import img4 from '../assets/community-4.jpg';

const items = [
  { title: 'India', subtitle: 'Comunidad de viajes', image: img1 },
  { title: 'Travel Talk', subtitle: 'Comunidad de viajeros', image: img2 },
  { title: 'Beach', subtitle: 'Relájate junto al mar', image: img3 },
  { title: 'Mountains', subtitle: 'Aventuras en las alturas', image: img4 },
];

const Community = () => {
  return (
    <section className="community">
      <h2>Conecta con otros viajeros en nuestra comunidad</h2>
      <div className="community__grid">
        {items.map((item, i) => (
          <div key={i} className="community__card">
            <img src={item.image} alt={item.title} />
            <div className="community__card-content">
              <span className="community__card-title">{item.title}</span>
              <span className="community__card-subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
