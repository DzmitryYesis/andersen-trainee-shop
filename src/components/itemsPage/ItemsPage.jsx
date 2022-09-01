import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getItems } from '../../api/items';
import { addOneItemAC } from '../../store/actions/cartActions';
import { selectIsLoggedIn } from '../../store/selectors/loginSelectors';

import style from './ItemsPage.module.css';

export const ItemsPage = () => {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleAddItem = amount => {
    dispatch(addOneItemAC(amount));
  };

  useEffect(() => {
    getItems(setState);
  }, []);

  return (
    <div className={style.wrapper}>
      {state?.map(product => (
        <div className={style.productWrapper} key={product.id}>
          <div className={style.divImg}>
            <img
              className={style.productImg}
              src={product.image}
              alt="Images of product"
            />
          </div>
          <div className={style.divTitle}>
            <Link key={product.id} to={`/item/${product.id}`}>
              {product.title}
            </Link>
          </div>
          <p>Price: {product.price}</p>
          {isLoggedIn ? (
            <button
              className={style.button}
              type="button"
              onClick={() => handleAddItem(product.price)}
            >
              Add
            </button>
          ) : (
            <button className={style.button} type="button">
              Login for added
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
