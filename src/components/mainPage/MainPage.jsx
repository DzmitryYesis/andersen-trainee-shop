import { Route, Routes } from 'react-router-dom';

import { Item } from '../item/Item';
import { ItemsPage } from '../itemsPage/ItemsPage';
import { Page404 } from '../page404/Page404';
import { ShopPage } from '../shopPage/ShopPage';

export const MainPage = ({ isLoggedIn, cartChangeItemsPage }) => (
  <div>
    <Routes>
      <Route
        path="/"
        element={
          <ItemsPage isLoggedIn={isLoggedIn} cartChangeItemsPage={cartChangeItemsPage} />
        }
      />
      <Route path="/:id" element={<Item />} />
      <Route path="/shop-information" element={<ShopPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </div>
);
