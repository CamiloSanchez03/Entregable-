import React from 'react';
import '../components/background.scss';

const Background = ({ children }) => {
  return (
    <div className="background">
      <div className="background-overlay" />
      <div className="background-content">
        {children}
      </div>
    </div>
  );
};

export default Background;
