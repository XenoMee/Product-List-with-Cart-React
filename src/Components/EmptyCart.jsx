import React from 'react';
import emptyCartImg from '/images/illustration-empty-cart.svg';

const EmptyCart = () => (
  <aside className='bg-white sm:max-h-[300px] p-5 rounded-md grid gap-8'>
    <h2 className='heading2 text-primary'>Your cart (0)</h2>
    <div className='grid justify-center'>
      <img className='mx-auto' src={`${emptyCartImg}`} alt='A chocolate cake with one piece floating' />
      <p>Your added items will appear here</p>
    </div>
  </aside>
);

export default EmptyCart;
