import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  initialErrorsState,
  initialLoginDataState,
} from '../../../constants/authorization';
import { setIsLoggedInAC, setIsShowPopUpAC } from '../../../store/actions/loginAction';

import { ButtonBlock } from './buttonBlock/ButtonBlock';
import { Input } from './Input/Input';
import style from './LoginForm.module.css';

export const LoginForm = () => {
  const [loginData, setLoginData] = useState(initialLoginDataState);
  const [errors, setErrors] = useState(initialErrorsState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      setErrors(errorsObj);
    }
  };

  const clearState = () => {
    setErrors(initialErrorsState);
    setLoginData(initialLoginDataState);
  };

  const handleStateChange = (formName, name) => {
    setErrors({ ...errors, [formName]: '' });
    setLoginData({ ...loginData, [formName]: name });
  };

  const cancelClick = () => {
    clearState();
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
