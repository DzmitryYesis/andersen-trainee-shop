import { NavLink } from 'react-router-dom';

import style from './LeftHeaderBlock.module.css';

export const LeftHeaderBlock = () => (
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
