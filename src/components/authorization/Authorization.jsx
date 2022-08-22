import React, { useState } from 'react';

import ReactDOM from 'react-dom';

import style from './Authorization.module.css';
import { Input } from './Input/Input';

const initialLoginDataState = {
  email: '',
  password: '',
};

const initialErrorsState = {
  email: '',
  password: '',
};

const Template = ({ closePopUp, setIsLoggedIn }) => {
  const [loginData, setLoginData] = useState(initialLoginDataState);
  const [errors, setErrors] = useState(initialErrorsState);

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
      setIsLoggedIn(true);
      closePopUp();
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
    closePopUp();
  };

  return (
    <div className={style.notifications}>
      <div className={style.buttonXWrapper}>
        <button className={style.buttonX} type="button" onClick={cancelClick}>
          X
        </button>
      </div>
      Login
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
      <button className={style.button} type="button" onClick={cancelClick}>
        Cancel
      </button>
      <button type="button" onClick={checkValidForm}>
        Save
      </button>
    </div>
  );
};
// eslint-disable-next-line consistent-return
export const Authorization = ({ isShowPopUp, setIsShowPopUp, setIsLoggedIn }) => {
  const closePopUp = () => {
    setIsShowPopUp(false);
  };

  const portal = document.getElementById('authorization');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(
      <Template closePopUp={closePopUp} setIsLoggedIn={setIsLoggedIn} />,
      portal,
    );
  }
};
