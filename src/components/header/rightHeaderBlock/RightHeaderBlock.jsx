import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({ setIsLoggedIn, cart }) => (
  <div className={style.wrapper}>
    <div className={style.shoppingCart}>
      <p>Shopping cart:</p>
      <div className={style.countSum}>
        <span>Items: {cart.items}</span>
        <span>Amount: {cart.amount}</span>
      </div>
    </div>
    <button type="button" onClick={() => setIsLoggedIn(false)}>
      LogOut
    </button>
  </div>
);
