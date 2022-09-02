import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemInCartAC } from '../../../store/actions/cartActions';
import { selectIsLoggedIn } from '../../../store/selectors/loginSelectors';

import style from './Item.module.css';

export const Item = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleAddItem = () => {
    const item = {
      image,
      id,
      title,
      price,
      totalCount: 1,
      totalPrice: price,
    };
    dispatch(addItemInCartAC(item, 1));
  };

  return (
    <div className={style.productWrapper} key={id}>
      <div className={style.divImg}>
        <img className={style.productImg} src={image} alt="Images of product" />
      </div>
      <div className={style.divTitle}>
        <Link key={id} to={`/item/${id}`}>
          {title}
        </Link>
      </div>
      <p>Price: {price}</p>
      {isLoggedIn ? (
        <button className={style.button} type="button" onClick={handleAddItem}>
          Add
        </button>
      ) : (
        <button className={style.button} type="button">
          Login for added
        </button>
      )}
    </div>
  );
};
