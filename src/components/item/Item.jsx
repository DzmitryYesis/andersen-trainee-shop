import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import style from './Item.module.css';

export const Item = ({ isLoggedIn, cartChangeItem }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [numberItem, setNumberItem] = useState(1);

  const handleOnChangeNumberItem = event => {
    setNumberItem(event.target.value);
  };

  const handleChangeCart = () => {
    cartChangeItem(item.price, Number(numberItem));
  };

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImg}>
        <img className={style.mainImg} src={item?.images[0]} alt="item-view" />
        <div className={style.secondRowImg}>
          <img className={style.otherImg} src={item?.images[1]} alt="item-view" />
          <img className={style.otherImg} src={item?.images[2]} alt="item-view" />
        </div>
      </div>
      <div className={style.info}>
        <span className={style.title}>{item?.title}</span>
        <span className={style.description}>{item?.description}</span>
        <span className={style.price}>Price: {item?.price}</span>
        {isLoggedIn ? (
          <div className={style.buyRow}>
            <span className={style.span}>Number of items to buy:</span>
            <input
              className={style.input}
              type="text"
              value={numberItem}
              onChange={handleOnChangeNumberItem}
            />
            <button className={style.button} type="button" onClick={handleChangeCart}>
              Add
            </button>
          </div>
        ) : (
          <button className={style.button} type="button">
            Login for added
          </button>
        )}
      </div>
    </div>
  );
};
