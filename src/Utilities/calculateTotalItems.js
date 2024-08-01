const totalCartItems = (arr) =>
  arr.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

export default totalCartItems;
