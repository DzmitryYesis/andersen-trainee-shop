import { Route, Routes } from 'react-router-dom';

import { ItemsPage } from '../itemsPage/ItemsPage';
import { ShopPage } from '../shopPage/ShopPage';

export const MainPage = ({ isLoggedIn }) => (
  <div>
    <Routes>
      <Route path="/" component={<ItemsPage isLoggedIn={isLoggedIn} />} exact />
      <Route path="/shop-information" component={<ShopPage />} />
    </Routes>
  </div>
);
