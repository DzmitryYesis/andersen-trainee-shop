import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = ({
  setIsLoggedIn,
  cart,
  isLoggedIn,
  setIsShowPopUp,
  setCart,
}) => {
  const handleLogOut = () => {
    setCart({ items: 0, amount: 0 });
    setIsLoggedIn(false);
  };

  return (
    <div className={style.wrapper}>
      {isLoggedIn ? (
        <div className={style.rowDiv}>
          <div className={style.shoppingCart}>
            <p className={style.pCart}>Shopping cart:</p>
            <div className={style.countSum}>
              <span className={style.span}>Items: {cart.items}</span>
              <span className={style.span}>Amount: {cart.amount}</span>
            </div>
          </div>
          <button className={style.button} type="button" onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      ) : (
        <button
          className={style.button}
          type="button"
          onClick={() => setIsShowPopUp(true)}
        >
          LogIn
        </button>
      )}
    </div>
  );
};
