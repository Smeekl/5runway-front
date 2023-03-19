import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';
import { useService } from '@services/services';
import { useAuth } from '@providers/auth.provider';
import './style.css';

const Logout = () => {
  const { userService } = useService();
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="logout">
      <h3 className="logout__title">Logout</h3>
      <p className="logout__text">Do you really want to leave?</p>
      <div className="logout__buttons">
        <Button
          className="logout__button"
          onClick={() => {
            userService.logoutUser();
            logout();
            navigate('/');
          }}
        >
          Yes
        </Button>
        <Button className="logout__button">No</Button>
      </div>
    </div>
  );
};

export default Logout;
