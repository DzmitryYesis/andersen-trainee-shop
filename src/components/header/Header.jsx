import { CartBlock } from './cartBlock/CartBlock';
import style from './Header.module.css';
import { NavigationBlock } from './navigationBlock/NavigationBlock';

export const Header = () => (
  <div className={style.wrapper}>
    <NavigationBlock />
    <CartBlock />
  </div>
);
