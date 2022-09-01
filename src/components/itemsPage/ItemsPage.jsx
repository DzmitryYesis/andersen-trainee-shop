import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getItems } from '../../api/items';

import style from './ItemsPage.module.css';

export const ItemsPage = ({ cartChangeItemsPage }) => {
  const [state, setState] = useState(null);

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

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
              onClick={() => cartChangeItemsPage(product.price)}
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
