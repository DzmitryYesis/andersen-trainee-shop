import React from 'react';

import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import { selectIsShowPopUp } from '../../store/selectors/loginSelectors';

import { LoginForm } from './loginForm/LoginForm';

export const Authorization = () => {
  const isShowPopUp = useSelector(selectIsShowPopUp);

  const portal = document.getElementById('authorization');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(<LoginForm />, portal);
  }
  return null;
};
