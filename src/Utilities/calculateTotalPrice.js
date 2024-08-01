const totalPrice = (arr) =>
  arr.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

export default totalPrice;
