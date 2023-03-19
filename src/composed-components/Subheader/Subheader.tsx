import { Link } from 'react-router-dom';
import './style.css';

const Subheader = () => (
  <div className="subheader">
    <ul className="subheader__links">
      <li className="subheader__item">
        <Link className="subheader__link" to="/">
          CATEGORIES
        </Link>
      </li>
      <li className="subheader__item">
        <Link className="subheader__link" to="/">
          TOP PRODUCT
        </Link>
      </li>
      <li className="subheader__item">
        <Link className="subheader__link" to="/">
          ARTICLES
        </Link>
      </li>
      <li className="subheader__item">
        <Link className="subheader__link" to="/">
          PRICING
        </Link>
      </li>
    </ul>
  </div>
);

export default Subheader;
