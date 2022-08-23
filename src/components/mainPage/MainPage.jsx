import { Route, Routes } from 'react-router-dom';

import { ItemsPage } from '../itemsPage/ItemsPage';
import { Page404 } from '../page404/Page404';
import { ShopPage } from '../shopPage/ShopPage';

export const MainPage = ({ isLoggedIn }) => (
  <div>
    <Routes>
      <Route path="/" element={<ItemsPage isLoggedIn={isLoggedIn} />} />
      <Route path="/shop-information" element={<ShopPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </div>
);
