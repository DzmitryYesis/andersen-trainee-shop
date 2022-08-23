import style from './Header.module.css';
import { LeftHeaderBlock } from './leftHeaderBlock/LeftHeaderBlock';
import { RightHeaderBlock } from './rightHeaderBlock/RightHeaderBlock';

export const Header = ({ setIsShowPopUp, isLoggedIn, setIsLoggedIn, cart }) => (
  <div className={style.wrapper}>
    <LeftHeaderBlock />
    {isLoggedIn ? (
      <RightHeaderBlock setIsLoggedIn={setIsLoggedIn} cart={cart} />
    ) : (
      <button type="button" onClick={() => setIsShowPopUp(true)}>
        LogIn
      </button>
    )}
  </div>
);
