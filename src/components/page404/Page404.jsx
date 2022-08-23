import style from './Page404.module.css';

export const Page404 = () => (
  <div className={style.wrapper}>
    <div className={style.imgDiv}>
      <img
        src="https://media3.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="img-page-not-found"
      />
    </div>
    <div className={style.div}>Page not found!</div>
    <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
  </div>
);
