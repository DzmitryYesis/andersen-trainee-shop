import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import style from './Item.module.css';

export const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div>
      <div className={style.info}>
        <span>{item?.title}</span>
        <span>{item?.price}</span>
        <span>{item?.description}</span>
      </div>
      <div className={style.wrapperImg}>
        <img className={style.mainImg} src={item?.images[0]} alt="item-view" />
        <div className={style.secondRowImg}>
          <img className={style.otherImg} src={item?.images[1]} alt="item-view" />
          <img className={style.otherImg} src={item?.images[2]} alt="item-view" />
        </div>
      </div>
    </div>
  );
};
