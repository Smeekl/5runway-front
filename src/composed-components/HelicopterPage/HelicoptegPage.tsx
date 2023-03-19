import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelicopterCard,
  IHelicopterCard,
} from '@components/HelicopterCard/HelicopterCard';
import './style.css';

export const HelicopterPage = () => {
  const [helicopters, setHelicopters] = useState([]);

  const cardRenderHandler = (products) =>
    products.map((props: IHelicopterCard, index: number) => (
      <Link to="/" key={index}>
        <HelicopterCard {...props} />
      </Link>
    ));

  useEffect(() => {
    axios
      .get('https://62c80e240f32635590d045ac.mockapi.io/helicopters')
      .then((res) => setHelicopters(res.data));
  }, []);

  const result = helicopters.filter((helicopter) =>
    helicopter.type.toLowerCase().includes('helicopter')
  );

  return (
    <div className="helicopter-page">
      <div className="helicopter-page__header">
        <h1 className="helicopter-page__title">Helicopter</h1>
      </div>
      <div className="helicopter-page__cards">{cardRenderHandler(result)}</div>
    </div>
  );
};
