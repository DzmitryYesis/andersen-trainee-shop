import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  clearErrorAC,
  setErrorsAC,
  setIsLoggedInAC,
  setIsShowPopUpAC,
  setLoginDataAC,
} from '../../../store/actions/loginAction';
import { selectErrors, selectLoginData } from '../../../store/selectors/loginSelectors';

import { ButtonBlock } from './buttonBlock/ButtonBlock';
import { Input } from './Input/Input';
import style from './LoginForm.module.css';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const loginData = useSelector(selectLoginData);

  const checkValidForm = () => {
    let isValid = true;
    const errorsObj = {};

    // Email
    if (!loginData.email) {
      isValid = false;
      errorsObj.email = 'Cannot be empty!';
    } else if (loginData.email !== 'admin') {
      isValid = false;
      errorsObj.email = 'Please, write admin';
    }

    // Password
    if (!loginData.password) {
      isValid = false;
      errorsObj.password = 'Cannot be empty!';
    } else if (loginData.password !== 'admin') {
      isValid = false;
      errorsObj.password = 'Please, write admin';
    }

    if (isValid) {
      dispatch(setIsLoggedInAC(true));
      dispatch(setIsShowPopUpAC(false));
      navigate('/');
    } else {
      dispatch(setErrorsAC(errorsObj));
    }
  };

  const handleStateChange = (formName, name) => {
    dispatch(clearErrorAC(formName));
    dispatch(setLoginDataAC(formName, name));
  };

  const cancelClick = () => {
    dispatch(setIsShowPopUpAC(false));
  };

  return (
    <div className={style.notifications}>
      <div className={style.buttonXWrapper}>
        <button className={style.buttonX} type="button" onClick={cancelClick}>
          X
        </button>
      </div>
      <h2>Login</h2>
      <Input
        label="Email"
        placeholder="Type your email..."
        type="text"
        name="email"
        onChange={handleStateChange}
        value={loginData.email}
        error={errors.email}
      />
      <Input
        label="Password"
        placeholder="Type your password..."
        type="password"
        name="password"
        onChange={handleStateChange}
        value={loginData.password}
        error={errors.password}
      />
      <p className={style.p}>
        *If you are interested in a one-time purchase without registration, enter admin in
        the email and password fields
      </p>
      <ButtonBlock checkValidForm={checkValidForm} cancelClick={cancelClick} />
    </div>
  );
};
