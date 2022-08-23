import { useState } from 'react';

import style from './App.module.css';
import { Authorization } from './components/authorization/Authorization';
import { Header } from './components/header/Header';
import { MainPage } from './components/mainPage/MainPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [cart, setCart] = useState({ items: 0, amount: 0 });

  return (
    <div className={style.app}>
      <header className={style.header}>
        <Header
          setIsShowPopUp={setIsShowPopUp}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          cart={cart}
        />
      </header>
      <MainPage isLoggedIn={isLoggedIn} />
      <Authorization
        isShowPopUp={isShowPopUp}
        setIsShowPopUp={setIsShowPopUp}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default App;
