import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemInCartAC } from '../../../store/actions/cartActions';
import { selectItems } from '../../../store/selectors/itemsSelectors';
import { selectIsLoggedIn } from '../../../store/selectors/loginSelectors';

import style from './Item.module.css';

export const Item = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const state = useSelector(selectItems);

  const handleAddItem = product => {
    const item = {
      image: product.image,
      id: product.id,
      title: product.title,
      price: product.price,
      totalCount: 1,
      totalPrice: product.price,
    };
    dispatch(addItemInCartAC(item, 1));
  };
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
              onClick={() => handleAddItem(product)}
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
