import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({ setIsLoggedIn, cart, isLoggedIn, setIsShowPopUp }) => (
  <div className={style.wrapper}>
    {isLoggedIn ? (
      <div className={style.rowDiv}>
        <div className={style.shoppingCart}>
          <p>Shopping cart:</p>
          <div className={style.countSum}>
            <span>Items: {cart.items}</span>
            <span>Amount: {cart.amount}</span>
          </div>
        </div>
        <button
          className={style.button}
          type="button"
          onClick={() => setIsLoggedIn(false)}
        >
          LogOut
        </button>
      </div>
    ) : (
      <button className={style.button} type="button" onClick={() => setIsShowPopUp(true)}>
        LogIn
      </button>
    )}
  </div>
);
