import { Link, useLocation } from 'react-router-dom';
import { ExportOutlined } from '@ant-design/icons';
import { useGetUser } from './useGetUser.hook';
import './style.css';

const Profile = () => {
  const location = useLocation();
  const { isLoading, user } = useGetUser();

  return (
    <div className="profile">
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="profile__wrapper">
          <h3 className="profile__title">Profile</h3>
          <p className="profile__email">{user?.email}</p>
          <p className="profile__subscribe">
            <span className="profile__name">Subscribe:</span>
            <Link to="/" className="profile__subscribe-type">
              <span>{user?.subscriptionPlan || 'Free'}</span>{' '}
              <span>
                {user?.expiringDate! > 0 ? user?.expiringDate : 'Unsubscribe'}
              </span>
            </Link>
          </p>
        </div>
      )}
      <ul className="profile__settings settings">
        <li className="settings__item">
          <Link className="settings__link" to="/">
            YOUR AIRCRAFTS
          </Link>
        </li>
        <li className="settings__item">
          <Link className="settings__link" to="/">
            ADD AIRCRAFT
          </Link>
        </li>
        <li className="settings__item">
          <Link
            className="settings__link settings__link_icon"
            to={`${location.pathname}/logout`}
          >
            <span className="settings__logout">LOG OUT</span>
            <ExportOutlined />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
