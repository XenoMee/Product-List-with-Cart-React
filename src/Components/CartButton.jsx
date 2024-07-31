import React from 'react';

const CartButton = ({ addItemToCart }) => (
  <button className='button cart-btn' onClick={addItemToCart}>
    Add to Cart
  </button>
);

export default CartButton;
