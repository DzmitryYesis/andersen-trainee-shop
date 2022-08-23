import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import style from './ItemsPage.module.css';

export const ItemsPage = ({ isLoggedIn, cartChangeItemsPage }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setState(data));
  }, []);

  return (
    <div className={style.asd}>
      {state?.map(product => (
        <div className={style.productWrapper} key={product.id}>
          <img
            className={style.productImg}
            src={product.images[0]}
            alt="Images of product"
          />
          <Link key={product.id} to={`/${product.id}`}>
            {product.title}
          </Link>
          <p>{product.price}</p>
          {isLoggedIn ? (
            <button type="button" onClick={() => cartChangeItemsPage(product.price)}>
              Add
            </button>
          ) : (
            <button type="button">Login for added</button>
          )}
        </div>
      ))}
    </div>
  );
};
