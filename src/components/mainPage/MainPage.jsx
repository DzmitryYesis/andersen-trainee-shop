import { useEffect, useState } from 'react';

import style from './MainPage.module.css';

export const MainPage = ({ isLoggedIn }) => {
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
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button type="button">{isLoggedIn ? 'Add' : 'Login for added'}</button>
        </div>
      ))}
    </div>
  );
};
