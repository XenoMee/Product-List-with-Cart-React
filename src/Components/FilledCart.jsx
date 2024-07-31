import React from 'react';

const FilledCart = () => (
  <aside className='bg-white p-5 rounded-md grid gap-4'>
    <h2 className='heading2'>Your cart (0)</h2>

    <ul role='list'>
    </ul>

    <div className='flex justify-between items-center text-rose-900'>
      <p>Order total</p>
      <p className='font-bold'></p>
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

export default FilledCart;
