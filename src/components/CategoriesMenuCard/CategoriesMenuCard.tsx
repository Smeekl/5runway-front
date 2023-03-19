import './style.css';

interface ICategoriesMenuCardProps {
  name: string;
  imgUrl: string;
}

export const CategoriesMenuCard = ({
  name,
  imgUrl,
}: ICategoriesMenuCardProps) => (
  <div className="categories-menu__item" data-testid="wrapper">
    <img
      className="categories-menu__img"
      src={imgUrl}
      alt=""
      data-testid="image"
    />
    <p className="categories-menu__title" data-testid="title">
      {name}
    </p>
  </div>
);
