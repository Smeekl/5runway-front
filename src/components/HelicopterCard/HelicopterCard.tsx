import {
  HeartOutlined,
  CalendarTwoTone,
  SettingTwoTone,
  AppleOutlined,
  EnvironmentTwoTone,
  HourglassTwoTone,
} from '@ant-design/icons';
import './style.css';

export interface IHelicopterCard {
  type: string;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  place: string;
  hours: number;
  year: number;
  engine: string;
}

export const HelicopterCard = ({
  type,
  name,
  description,
  imgUrl,
  price,
  place,
  hours,
  year,
  engine,
}: IHelicopterCard) => (
  <div className="helicopter__card">
    <p className="card__name">{name}</p>
    <p className="card__description">{description}</p>
    <div>
      <img className="card__img" src={imgUrl} alt="" />
    </div>
    <div className="card__price_block">
      <p className="card__price">{price}</p>
      <div className="card__compare_favorite">
        <AppleOutlined />
        <HeartOutlined />
      </div>
    </div>
    <div className="card__block">
      <div className="card__items">
        <span className="helicopter__card_icons">
          <EnvironmentTwoTone />
        </span>
        <p className="card__place">{place}</p>
      </div>
      <div className="card__items">
        <span className="helicopter__card_icons">
          <CalendarTwoTone />
        </span>
        <p className="card__year">{year}</p>
      </div>
      <div className="card__items">
        <span className="helicopter__card_icons">
          <HourglassTwoTone />
        </span>
        <p className="card__hour">{hours}</p>
      </div>
      <div className="card__items">
        <span className="helicopter__card_icons">
          <SettingTwoTone />
        </span>
        <p className="card__engine">{engine}</p>
      </div>
    </div>
  </div>
);
