import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({ setIsLoggedIn }) => (
  <div className={style.wrapper}>
    <div className={style.shoppingCart}>
      <p>Shopping cart:</p>
      <p>Count:</p>
      <p>Sum:</p>
    </div>
    <button type="button" onClick={() => setIsLoggedIn(false)}>
      LogOut
    </button>
  </div>
);
