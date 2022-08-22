import { useState } from 'react';

import style from './App.module.css';
import { Authorization } from './components/authorization/Authorization';
import { Header } from './components/header/Header';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);

  return (
    <div className={style.app}>
      <header className={style.header}>
        <Header setIsShowPopUp={setIsShowPopUp} />
      </header>
      <Authorization isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp} />
    </div>
  );
};

export default App;
