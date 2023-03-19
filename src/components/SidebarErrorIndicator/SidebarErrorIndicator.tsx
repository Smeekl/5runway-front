import { ExclamationCircleOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { TSidebarErrorIndicator } from '@components/types';
import './style.css';

const SidebarErrorIndicator = ({ content, active }: TSidebarErrorIndicator) => (
  <div
    className={cn({
      'sidebar__error-indicator': true,
      sidebar__error__active: active,
    })}
  >
    <ExclamationCircleOutlined className="sidebar__error-icon" />
    {content}
  </div>
);

export default SidebarErrorIndicator;
