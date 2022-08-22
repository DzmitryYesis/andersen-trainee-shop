import React from 'react';

import ReactDOM from 'react-dom';

import { LoginForm } from './loginForm/LoginForm';

// eslint-disable-next-line consistent-return
export const Authorization = ({ isShowPopUp, setIsShowPopUp, setIsLoggedIn }) => {
  const closePopUp = () => {
    setIsShowPopUp(false);
  };

  const portal = document.getElementById('authorization');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(
      <LoginForm closePopUp={closePopUp} setIsLoggedIn={setIsLoggedIn} />,
      portal,
    );
  }
};
