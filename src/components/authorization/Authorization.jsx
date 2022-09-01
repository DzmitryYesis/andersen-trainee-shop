import React from 'react';

import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { LoginForm } from './loginForm/LoginForm';

export const Authorization = () => {
  const isShowPopUp = useSelector(state => state.login.isShowPopUp);

  const portal = document.getElementById('authorization');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(<LoginForm />, portal);
  }
  return null;
};
