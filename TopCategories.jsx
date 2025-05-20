import React from 'react';
import './topCategories.scss';

const categories = [
  { icon: "🏨", label: "Hotels" },
  { icon: "🧗", label: "Mountains" },
  { icon: "🏙️", label: "Cities" },
  { icon: "🏖️", label: "Beaches" },
];

const TopCategories = () => {
  return (
    <section className="categories">
      <h2>Top Categories</h2>
      <div className="categories__list">
        {categories.map((cat, i) => (
          <div key={i} className="categories__item">
            <span>{cat.icon}</span>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
