export const getItem = (id, setItem) => {
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(res => res.json())
    .then(data => setItem(data));
};

export const getItems = setState => {
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => setState(data));
};
