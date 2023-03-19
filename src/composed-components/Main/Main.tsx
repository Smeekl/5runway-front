import helicopter from '@mainPageIcons/helicopter.png';
import Button from '@components/Button/Button';
import SearchInput from '@components/SearchInput/SearchInput';
import './style.css';

const Main = () => (
  <main className="main">
    <div className="main__find-aircraft find-aircraft">
      <h1 className="find-aircraft__title">Find your AirCraft</h1>
      <p className="find-aircraft__subtitle">
        A huge selection of aviation equipment
      </p>
      <div className="find-aircraft__search">
        <SearchInput startIcon={true} />
        <Button className="find-aircraft__btn">Search</Button>
      </div>
      <div className="find-aircraft__background">
        <img className="find-aircraft__image" src={helicopter} />
      </div>
    </div>
    <div className="main__categories">
      <h2>Categories</h2>
    </div>
    <div className="main__top-products">
      <h2>Top products</h2>
    </div>
    <div className="main__articles">
      <h2>Articles</h2>
    </div>
  </main>
);

export default Main;
