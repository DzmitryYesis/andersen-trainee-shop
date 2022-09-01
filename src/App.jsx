import { useState } from 'react';

import style from './App.module.css';
import { Authorization } from './components/authorization/Authorization';
import { Header } from './components/header/Header';
import { MainPage } from './components/mainPage/MainPage';

const App = () => {
  const [cart, setCart] = useState({ items: 0, amount: 0 });

  const cartChangeItemsPage = amount => {
    setCart({ ...cart, amount: cart.amount + amount, items: cart.items + 1 });
  };

  const cartChangeItem = (amount, number) => {
    setCart({
      ...cart,
      amount: cart.amount + amount * number,
      items: cart.items + number,
    });
  };

  return (
    <div className={style.app}>
      <Header cart={cart} setCart={setCart} />
      <MainPage
        cartChangeItemsPage={cartChangeItemsPage}
        cartChangeItem={cartChangeItem}
      />
      <Authorization />
    </div>
  );
};

export default App;
