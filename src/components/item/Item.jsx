import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getItem } from '../../api/items';
import { addNumberOfItem } from '../../store/actions/cartActions';
import { selectIsLoggedIn } from '../../store/selectors/loginSelectors';

import style from './Item.module.css';

export const Item = () => {
  const [item, setItem] = useState(null);
  const [numberItem, setNumberItem] = useState(1);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { id } = useParams();

  const handleOnChangeNumberItem = event => {
    setNumberItem(event.target.value);
  };

  const handleChangeCart = () => {
    dispatch(addNumberOfItem(Number(numberItem), item.price));
  };

  useEffect(() => {
    getItem(id, setItem);
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImg}>
        <img className={style.mainImg} src={item?.image} alt="item-view" />
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
