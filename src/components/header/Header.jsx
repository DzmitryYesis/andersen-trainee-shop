import style from './Header.module.css';
import { LeftHeaderBlock } from './leftHeaderBlock/LeftHeaderBlock';
import { RightHeaderBlock } from './rightHeaderBlock/RightHeaderBlock';

export const Header = ({ cart, setCart }) => (
  <div className={style.wrapper}>
    <LeftHeaderBlock />
    <RightHeaderBlock cart={cart} setCart={setCart} />
  </div>
);
