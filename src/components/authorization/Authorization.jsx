import React from 'react';

import ReactDOM from 'react-dom';

import style from './Authorization.module.css';

const Template = ({ closePopUp }) => (
  <div className={style.notifications}>
    Your questionnaire is submitted
    <button className={style.button} type="button" onClick={closePopUp}>
      OK
    </button>
  </div>
);

// eslint-disable-next-line consistent-return
export const Authorization = ({ isShowPopUp, setIsShowPopUp }) => {
  const closePopUp = () => {
    setIsShowPopUp(false);
  };

  const portal = document.getElementById('authorization');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(<Template closePopUp={closePopUp} />, portal);
  }
};
