import style from './Header.module.css';

export const Header = ({ setIsShowPopUp }) => (
  <div className={style.wrapper}>
    <div>Navigation</div>
    <button type="button" onClick={() => setIsShowPopUp(true)}>
      Log in
    </button>
  </div>
);
