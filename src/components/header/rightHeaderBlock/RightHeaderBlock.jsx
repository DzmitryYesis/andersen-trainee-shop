import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({ setIsLoggedIn, cart, isLoggedIn, setIsShowPopUp }) => (
  <div className={style.wrapper}>
    {isLoggedIn ? (
      <div>
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
    ) : (
      <button type="button" onClick={() => setIsShowPopUp(true)}>
        LogIn
      </button>
    )}
  </div>
);
