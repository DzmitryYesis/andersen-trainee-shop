import { useDispatch, useSelector } from 'react-redux';

import {
  addOnePositionOnCartAC,
  deleteItemOnCart,
  deleteOnePositionOnCartAC,
} from '../../store/actions/cartActions';
import { selectCartItems } from '../../store/selectors/cartSelectors';

import style from './Cart.module.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);

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
      <table border="1" align="centre">
        <tbody className={style.body}>
          <tr className={style.headerRow}>
            <th className={style.headerColumn}>Image</th>
            <th className={style.headerColumn}>Product ID</th>
            <th className={style.headerColumn}>Title</th>
            <th className={style.headerColumn}>Price</th>
            <th className={style.headerColumn}>Total count</th>
            <th className={style.headerColumn}>Total price</th>
            <th className={style.headerColumn}>Action</th>
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
              <td>{item.totalPrice}</td>
              <td>
                <button type="button" onClick={() => handleDeleteAllItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
