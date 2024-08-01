import React from 'react';
import CartItem from './CartItem';

const FilledCart = ({ amountItems, availableItems }) => {
  const totalPrice = availableItems.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  return (
    <aside className='bg-white p-5 rounded-md grid gap-4 content-start'>
      <h2 className='heading2'>Your cart ({amountItems})</h2>

      <ul role='list'>
        {availableItems.map((item) => (
          <CartItem key={item.id} name={item.name} amount={item.quantity} price={item.price} />
        ))}
      </ul>

      <div className='flex justify-between items-center text-rose-900'>
        <p>Order total</p>
        <p className='font-bold'>${totalPrice.toFixed(2)}</p>
      </div>

      <div className='carbonNeutral bg-rose-50 text-rose-900 py-4 px-6 flex gap-2 justify-center items-center rounded-xl'>
        <p>
          This is <span className='font-bold'> carbon-neutral </span> delivery
        </p>
      </div>

      <button className='button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark'>
        Confirm Order
      </button>
    </aside>
  );
};

export default FilledCart;
