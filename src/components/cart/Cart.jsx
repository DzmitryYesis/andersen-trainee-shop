import { useDispatch, useSelector } from 'react-redux';

import {
  addOnePositionOnCartAC,
  clearCartAC,
  deleteItemOnCart,
  deleteOnePositionOnCartAC,
} from '../../store/actions/cartActions';
import { selectCartItems } from '../../store/selectors/cartSelectors';

import style from './Cart.module.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

  const priceItems = items.reduce((ac, curr) => ac + curr.totalPrice, 0);

  const handleDelete = id => {
    dispatch(deleteOnePositionOnCartAC(id));
  };

  const handleAdd = id => {
    dispatch(addOnePositionOnCartAC(id));
  };

  const handleDeleteAllItem = id => {
    dispatch(deleteItemOnCart(id));
  };

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Product ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Total count</th>
            <th>Total price</th>
            <th>Action</th>
          </tr>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <img className={style.img} src={item.image} alt="item-view" />
              </td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  -
                </button>
                {item.totalCount}
                <button type="button" onClick={() => handleAdd(item.id)}>
                  +
                </button>
              </td>
              <td>{item.totalPrice.toFixed(2)}</td>
              <td>
                <button type="button" onClick={() => handleDeleteAllItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.totalPriceDiv}>Total Price: {priceItems.toFixed(2)}</div>
      <div className={style.buttonBlock}>
        <button
          className={style.button}
          type="button"
          onClick={() => dispatch(clearCartAC())}
        >
          Clear
        </button>
        <button className={style.button} disabled type="button">
          Buy
        </button>
      </div>
    </div>
  );
};
