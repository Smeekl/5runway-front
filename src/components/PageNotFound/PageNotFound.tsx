import { Empty } from 'antd';
import './style.css';

const PageNotFound = () => (
  <div className="page-not-found-wrapper">
    <h1 className="page-not-found__title">404</h1>
    <span className="page-not-found__message">OOOPS, SORRY WE CAN'T FIND THAT PAGE!</span>
    <span className="page-not-found__description">Either something went wrong or the page doesn't exist anymore.</span>
    <Empty description={false} />
  </div>
);

export default PageNotFound;
