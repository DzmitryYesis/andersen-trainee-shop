import style from './Header.module.css';
import { RightHeaderBlock } from './rightHeaderBlock/RightHeaderBlock';

export const Header = ({ setIsShowPopUp, isLoggedIn, setIsLoggedIn }) => (
  <div className={style.wrapper}>
    <div>Navigation</div>
    {isLoggedIn ? (
      <RightHeaderBlock setIsLoggedIn={setIsLoggedIn} />
    ) : (
      <button type="button" onClick={() => setIsShowPopUp(true)}>
        LogIn
      </button>
    )}
  </div>
);
