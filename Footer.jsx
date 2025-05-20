import React from 'react';
import './footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">Trxvl.</div>
        <div className="footer__links">
          <ul>
            <li>Seslendirme ve Alt Jazz</li>
            <li>Media Market</li>
            <li>Gillie</li>
            <li>Size Last</li>
            <li><button>Helmet KOD</button></li>
          </ul>
          <ul>
            <li>Self Betimes</li>
            <li>Yatırımcı İlişkileri</li>
            <li>Basal Himmler</li>
          </ul>
          <ul>
            <li>Yard Market</li>
            <li>İş İmkanları</li>
            <li>Car Tercihleri</li>
          </ul>
          <ul>
            <li>Hedge Karla</li>
            <li>Mullein Koşulları</li>
            <li>Autumnal Bulgier</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__socials">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <p>© 1997-2021 Netflix, Inc. (i-062d573a0ee099242)</p>
      </div>
    </footer>
  );
}
