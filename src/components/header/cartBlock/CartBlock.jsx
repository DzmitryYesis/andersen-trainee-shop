import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import cartSVG from '../../../icons/cartSVG.svg';
import { clearCartAC } from '../../../store/actions/cartActions';
import { setIsLoggedInAC, setIsShowPopUpAC } from '../../../store/actions/loginAction';
import { selectCartItems } from '../../../store/selectors/cartSelectors';
import { selectIsLoggedIn } from '../../../store/selectors/loginSelectors';

import style from './CartBlock.module.css';

export const CartBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const items = useSelector(selectCartItems);

  const countItems = items.reduce((ac, curr) => ac + curr.totalCount, 0);

  const priceItems = items.reduce((ac, curr) => ac + curr.totalPrice, 0);

  const handleLogOut = () => {
    dispatch(clearCartAC());
    dispatch(setIsLoggedInAC(false));
  };

  const handleLogIn = () => {
    dispatch(setIsShowPopUpAC(true));
  };

  const handleOpenCartPage = () => {
    navigate('/cart');
  };

  return (
    <div className={style.wrapper}>
      {isLoggedIn ? (
        <div className={style.rowDiv}>
          <div className={style.shoppingCart}>
            <button
              className={style.buttonSVG}
              type="button"
              onClick={handleOpenCartPage}
            >
              <img src={cartSVG} alt="some-cart" className={style.svg} />
            </button>
            <div className={style.countSum}>
              <span className={style.span}>Items: {countItems}</span>
              <span className={style.span}>Amount: {priceItems.toFixed(2)}</span>
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
