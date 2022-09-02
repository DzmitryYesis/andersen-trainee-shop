import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addItemInCartAC } from '../../store/actions/cartActions';
import { selectItems } from '../../store/selectors/itemsSelectors';
import { selectIsLoggedIn } from '../../store/selectors/loginSelectors';

import style from './ItemPage.module.css';

export const ItemPage = () => {
  const [numberItem, setNumberItem] = useState(1);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { id } = useParams();
  const state = useSelector(selectItems);

  const item = state.find(item => item.id === Number(id));

  const handleOnChangeNumberItem = event => {
    setNumberItem(event.target.value);
  };

  const handleChangeCart = () => {
    const itemForCart = {
      image: item.image,
      id: item.id,
      title: item.title,
      price: item.price,
      totalCount: 1,
      totalPrice: item.price,
    };
    dispatch(addItemInCartAC(itemForCart, Number(numberItem)));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperImg}>
        <img className={style.mainImg} src={item.image} alt="item-view" />
      </div>
      <div className={style.info}>
        <span className={style.title}>{item.title}</span>
        <span className={style.description}>{item.description}</span>
        <span className={style.price}>Price: {item.price}</span>
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
