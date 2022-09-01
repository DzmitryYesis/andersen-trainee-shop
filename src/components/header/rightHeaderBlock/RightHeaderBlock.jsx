import { useDispatch, useSelector } from 'react-redux';

import { clearCartAC } from '../../../store/actions/cartActions';
import { setIsLoggedInAC, setIsShowPopUpAC } from '../../../store/actions/loginAction';
import { selectHeaderCart } from '../../../store/selectors/cartSelectors';
import { selectIsLoggedIn } from '../../../store/selectors/loginSelectors';

import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cart = useSelector(selectHeaderCart);

  const handleLogOut = () => {
    // setCart({ items: 0, amount: 0 });
    dispatch(clearCartAC());
    dispatch(setIsLoggedInAC(false));
  };

  const handleLogIn = () => {
    dispatch(setIsShowPopUpAC(true));
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
        <button className={style.button} type="button" onClick={handleLogIn}>
          LogIn
        </button>
      )}
    </div>
  );
};
