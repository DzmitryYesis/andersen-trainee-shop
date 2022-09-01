import style from './App.module.css';
import { Authorization } from './components/authorization/Authorization';
import { Header } from './components/header/Header';
import { MainPage } from './components/mainPage/MainPage';

const App = () => (
  <div className={style.app}>
    <Header />
    <MainPage />
    <Authorization />
  </div>
);
export default App;
