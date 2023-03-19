import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as IconSidebarLogo } from '@svgIcons/iconSidebarLogo.svg';
import { useAuth } from '@providers/auth.provider';
import './style.css';

interface ISidebarProps {
  children: React.ReactElement;
  title: string;
  index: number;
}

const Sidebar = ({ children, title, index }: ISidebarProps) => {
  const [isClosing] = useState(false);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clickHandlerCloseLast = () => {
    const currPathArray = pathname.split('/');
    currPathArray.pop();

    const newPath = currPathArray.join('/') ? currPathArray.join('/') : '/';
    navigate(newPath, { replace: true });
  };

  const clickHandlerCloseAll = () => {
    const newPath = '/';
    navigate(newPath, { replace: true });
  };

  return (
    <div
      className={cn({
        close: isClosing,
        sidebar__wrapper_main: !isClosing && index === 0,
        sidebar__wrapper: !isClosing && index !== 0,
      })}
    >
      <div
        className="sidebar"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="sidebar__header">
          {isLoggedIn ? <IconSidebarLogo /> : <span>{title}</span>}
          {index === 0 ? (
            <span>
              <CloseOutlined onClick={clickHandlerCloseAll} />
            </span>
          ) : (
            <span>
              <RightOutlined onClick={clickHandlerCloseLast} />
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
