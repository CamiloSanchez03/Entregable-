import React from 'react';
import "./appPromo.scss";

import google from '../assets/google.png';
import appstore from '../assets/appstore.png';
import appMockup from '../assets/mockup.png';

const AppPromo = () => {
  return (
    <section className="app-promo">
      <div className="app-promo__content">
        <h2>Your all-in-one travel app.</h2>
        <p>
          Book flights, hotels, trains & rental cars anywhere in the world in just seconds.
          Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
        </p>
        <div className="app-promo__tabs">
          <button type="button" className="active">Mobile</button>
          <button type="button">Email</button>
        </div>

        <form className="app-promo__input" onSubmit={e => e.preventDefault()}>
          <input type="tel" placeholder="+91 Mobile number" />
          <button type="submit">Search</button>
        </form>

        <div className="app-promo__stores">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={google} alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appstore} alt="App Store" />
          </a>
        </div>
      </div>
      <div className="app-promo__image">
        <img src={appMockup} alt="App Mockup" />
      </div>
    </section>
  );
};

export default AppPromo;
