import React from 'react';

import style from './ButtonBlock.module.css';

export const ButtonBlock = ({ cancelClick, checkValidForm }) => (
  <div className={style.buttonBlock}>
    <button className={style.button} type="button" onClick={cancelClick}>
      Cancel
    </button>
    <button className={style.button} type="button" onClick={checkValidForm}>
      Save
    </button>
  </div>
);
