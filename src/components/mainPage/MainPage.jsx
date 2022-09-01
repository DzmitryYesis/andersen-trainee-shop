import { Route, Routes } from 'react-router-dom';

import { Cart } from '../cart/Cart';
import { Item } from '../item/Item';
import { ItemsPage } from '../itemsPage/ItemsPage';
import { Page404 } from '../page404/Page404';
import { ShopPage } from '../shopPage/ShopPage';

export const MainPage = () => (
  <div>
    <Routes>
      <Route path="/" exact element={<ItemsPage />} />
      <Route path="/item/:id" exact element={<Item />} />
      <Route path="/shop-information" element={<ShopPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </div>
);
