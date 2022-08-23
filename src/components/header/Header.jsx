import style from './Header.module.css';
import { LeftHeaderBlock } from './leftHeaderBlock/LeftHeaderBlock';
import { RightHeaderBlock } from './rightHeaderBlock/RightHeaderBlock';

export const Header = ({ setIsShowPopUp, isLoggedIn, setIsLoggedIn, cart, setCart }) => (
  <div className={style.wrapper}>
    <LeftHeaderBlock />
    <RightHeaderBlock
      setIsLoggedIn={setIsLoggedIn}
      cart={cart}
      isLoggedIn={isLoggedIn}
      setIsShowPopUp={setIsShowPopUp}
      setCart={setCart}
    />
  </div>
);
