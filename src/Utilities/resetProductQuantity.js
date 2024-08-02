const resetProductQuantity = ({ id, products }) => {
  return products.map((product) => {
    return product.id === id ? { ...product, quantity: 0 } : product;
  });
};

export default resetProductQuantity;
