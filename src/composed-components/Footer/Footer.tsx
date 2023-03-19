import { Link } from 'react-router-dom';
import { ReactComponent as IconInstagram } from '@svgIcons/iconInstagram.svg';
import { ReactComponent as IconEmail } from '@svgIcons/iconEmail.svg';
import { ReactComponent as IconPinterest } from '@svgIcons/iconPinterest.svg';
import { ReactComponent as IconTwitter } from '@svgIcons/iconTwitter.svg';
import { ReactComponent as IconLinkedIn } from '@svgIcons/iconLinkedIn.svg';
import { ReactComponent as IconFacebook } from '@svgIcons/iconFacebook.svg';
import { ReactComponent as IconSecondLogo } from '@svgIcons/iconSecondLogo.svg';
import './style.css';

const socialMedia = [
  { icon: <IconInstagram />, url: '#' },
  { icon: <IconEmail />, url: '#' },
  { icon: <IconPinterest />, url: '#' },
  { icon: <IconTwitter />, url: '#' },
  { icon: <IconLinkedIn />, url: '#' },
  { icon: <IconFacebook />, url: '#' },
];

const listItems = [
  { name: 'Menu', url: '/menu' },
  { name: 'Profile', url: '/profile' },
  { name: 'Save', url: '/save' },
  { name: 'Compare', url: '/compare' },
  { name: 'Sell now', url: '/sellnow' },
  { name: 'Search', url: '/search' },
  { name: 'Articles', url: '/articles' },
  { name: 'Fevorite products', url: '/fevoriteproducts' },
  { name: 'Aircraft', url: '/aircraft' },
  { name: 'Parts/products', url: '/Parts/products' },
  { name: 'Real estate', url: '/realestate' },
  { name: 'Services', url: '/services' },
  { name: 'Business aircraft', url: '/businessaircraft' },
  { name: 'Campany dealer', url: '/campanydealer' },
  { name: 'Features', url: '/features' },
  { name: 'Engines', url: '/engines' },
  { name: 'Help', url: '/help' },
  { name: 'Security', url: '/security' },
  { name: 'Privacy', url: '/privacy' },
];

const socialMediaList = socialMedia.map(({ icon, url }, index) => (
  <li className="social__item" key={index}>
    <Link to={url} className="social__link">
      {icon}
    </Link>
  </li>
));
const navigationList = listItems.map(({ name, url }, index) => (
  <li className="list__item" key={index}>
    <Link to={url} className="list__link">
      {name}
    </Link>
  </li>
));

const Footer = () => (
  <div className="footer">
    <div className="footer__social social">{socialMediaList}</div>
    <div className="footer__menu menu">{navigationList}</div>
    <div className="footer__info info">
      <div className="info__copyright copyright">
        <span>Runway5</span>
        <span>Copyright © 2020</span>
      </div>
      <Link to="/home" className="footer__icon icon  ">
        <IconSecondLogo />
      </Link>
    </div>
  </div>
);

export default Footer;
