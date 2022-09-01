import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import cartSVG from '../../../icons/cartSVG.svg';
import { clearCartAC } from '../../../store/actions/cartActions';
import { setIsLoggedInAC, setIsShowPopUpAC } from '../../../store/actions/loginAction';
import { selectHeaderCart } from '../../../store/selectors/cartSelectors';
import { selectIsLoggedIn } from '../../../store/selectors/loginSelectors';

import style from './RightHeaderBlock.module.css';

export const RightHeaderBlock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cart = useSelector(selectHeaderCart);

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
