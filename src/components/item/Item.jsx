import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <div>
      <span>{item?.title}</span>
      <span>{item?.price}</span>
      <span>{item?.description}</span>
      <img src={item?.images[0]} alt="item-view" />
      <img src={item?.images[1]} alt="item-view" />
      <img src={item?.images[2]} alt="item-view" />
    </div>
  );
};
