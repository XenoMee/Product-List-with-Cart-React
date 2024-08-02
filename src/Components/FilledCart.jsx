import React from 'react';
import CartItem from './CartItem';
import totalPrice from '../Utilities/calculateTotalPrice';
import resetProductQuantity from '../Utilities/resetProductQuantity';

const FilledCart = ({ amountItems, availableItems, toggleModal, products, setProducts }) => {
  const removeItemFromCart = (id) => {
    setProducts(resetProductQuantity({ id, products }));
  };

  return (
    <aside className='bg-white p-5 rounded-md grid gap-5 content-start'>
      <h2 className='heading2 text-primary'>Your cart ({amountItems})</h2>

      <ul className='grid gap-4' role='list'>
        {availableItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            removeItem={() => removeItemFromCart(item.id)}
          />
        ))}
      </ul>

      <div className='flex justify-between items-center text-rose-900'>
        <p>Order total</p>
        <p className='font-bold text-2xl'>${totalPrice(availableItems).toFixed(2)}</p>
      </div>

      <div className='carbonNeutral bg-rose-50 text-rose-900 p-4 flex gap-2 justify-center items-center rounded-xl'>
        <p>
          This is <span className='font-bold'> carbon-neutral </span> delivery
        </p>
      </div>

      <button
        className='button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark'
        onClick={toggleModal}
      >
        Confirm Order
      </button>
    </aside>
  );
};

export default FilledCart;
