import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({ setIsLoggedIn }) => (
  <div className={style.wrapper}>
    <div className={style.shoppingCart}>
      <p>Shopping cart:</p>
      <div className={style.countSum}>
        <span>Items: 0</span>
        <span>Amount: 0</span>
      </div>
    </div>
    <button type="button" onClick={() => setIsLoggedIn(false)}>
      LogOut
    </button>
  </div>
);
