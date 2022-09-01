import { NavLink } from 'react-router-dom';

import style from './NavigationBlock.module.css';

export const NavigationBlock = () => (
  <div>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? style.isActive : style.nonIsActive)}
    >
      Home
    </NavLink>
    <NavLink
      to="/shop-information"
      className={({ isActive }) => (isActive ? style.isActive : style.nonIsActive)}
    >
      About shop
    </NavLink>
  </div>
);
