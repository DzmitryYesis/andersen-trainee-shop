export const getItem = (id, setItem) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setItem(data));
};
