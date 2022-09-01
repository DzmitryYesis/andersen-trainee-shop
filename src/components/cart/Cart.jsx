import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/selectors/cartSelectors';

import style from './Cart.module.css';

export const Cart = () => {
  const items = useSelector(selectCartItems);

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
              <td>{item.totalCount}</td>
              <td>{item.totalPrice}</td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
