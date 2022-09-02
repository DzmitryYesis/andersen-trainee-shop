import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectItems } from '../../store/selectors/itemsSelectors';
import { getUsersTC } from '../../store/thunks/itemsThunks';

import { Item } from './item/Item';
import style from './ItemsPage.module.css';

export const ItemsPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectItems);

  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  return (
    <div className={style.wrapper}>
      {state?.map(product => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};
