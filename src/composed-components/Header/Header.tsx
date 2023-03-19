import { Link } from 'react-router-dom';
import { ReactComponent as IconCompare } from '@svgIcons/iconCompare.svg';
import { ReactComponent as IconUser } from '@svgIcons/iconUser.svg';
import { ReactComponent as IconHeart } from '@svgIcons/iconHeart.svg';
import { ReactComponent as Logo } from '@svgIcons/iconLogo.svg';
import Button from '@components/Button/Button';
import SearchInput from '@components/SearchInput/SearchInput';
import Subheader from '@composed-components/Subheader/Subheader';
import './style.css';

const Header = () => (
  <header className="header">
    <div className="header__main">
      <Link to="/" className="header__logo logo">
        <Logo className="logo__icon" />
      </Link>
      <div className="header__search search">
        <SearchInput />
      </div>
      <div className="header__options options">
        <ul className="options__items">
          <li className="options__item">
            <Link className="options__link" to="/">
              <Button className="options__btn">Sell Now</Button>
            </Link>
          </li>
          <li className="options__item">
            <Link className="options__link" to="/">
              <Button
                className="options__btn"
                icon={<IconCompare className="options__compare" />}
              >
                Compare
              </Button>
            </Link>
          </li>
          <li className="options__item">
            <Link className="options__link" to="/">
              <Button className="options__btn">Filter</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__icons icons">
        <ul className="icons__items">
          <li className="icons__item">
            <Link to="/">
              <Button className="icons__btn">
                <IconHeart />
              </Button>
            </Link>
          </li>
          <li className="icons__item">
            <Link to="/">
              <Button className="icons__btn">
                <IconUser />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Subheader />
  </header>
);

export default Header;
