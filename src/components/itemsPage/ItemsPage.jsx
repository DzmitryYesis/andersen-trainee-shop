import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getUsersTC } from '../../store/thunks/itemsThunks';

import { Item } from './item/Item';

export const ItemsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  return <Item />;
};
