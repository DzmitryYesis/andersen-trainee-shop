import { useState } from 'react';

import style from './App.module.css';
import { Authorization } from './components/authorization/Authorization';
import { Header } from './components/header/Header';
import { MainPage } from './components/mainPage/MainPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [cart, setCart] = useState({ items: 0, amount: 0 });

  const cartChangeItemsPage = amount => {
    setCart({ ...cart, amount: cart.amount + amount, items: cart.items + 1 });
  };

  return (
    <div className={style.app}>
      <Header
        setIsShowPopUp={setIsShowPopUp}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        cart={cart}
      />
      <MainPage isLoggedIn={isLoggedIn} cartChangeItemsPage={cartChangeItemsPage} />
      <Authorization
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default App;
