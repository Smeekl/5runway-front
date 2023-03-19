import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as IconPlane } from '@svgIcons/iconPlane.svg';
import { CategoriesMenuCard } from '@components/CategoriesMenuCard/CategoriesMenuCard';
import Button from '@components/Button/Button';
import './style.css';

export const CategoriesMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://62c80e240f32635590d045ac.mockapi.io/categories-menu')
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <>
      <div className="categories-menu">
        {categories.map(({ name, imgUrl, route }, index) => (
          <Link to={route} key={index}>
            <CategoriesMenuCard name={name} imgUrl={imgUrl} />
          </Link>
        ))}
      </div>
      <div className="discount__block ">
        <div className="categories-menu__btn">
          <p className="discount__sell-now">Sell Now</p>
          <p className="discount__sell-now__description">
            You can place your ad for aviation equipment
          </p>
          <Button className="discount__sell-now__btn">Sell Now </Button>
        </div>
        <div className="categories-menu__discount">
          <IconPlane />
          <div className="discount__area">
            <p className="q">-50%</p>
            <p className="qq">have time to buy a subscription</p>
          </div>
        </div>
      </div>
    </>
  );
};
