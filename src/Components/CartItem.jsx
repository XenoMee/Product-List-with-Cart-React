import React from 'react';

const CartItem = () => (
  <li className='flex justify-between items-center'>
    <div className='grid gap-4'>
      <h4 className='text-rose-900'>Classic Tiramisu</h4>
      <div className='flex justify-between items-center w-56'>
        <span className='text-primary'>1x</span>
        <span className='text-rose-500 font-bold'>$5.50</span>
      </div>
    </div>
    <button className='flex items-center justify-center border border-rose-400 w-5 h-5 rounded-full'>
      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none' viewBox='0 0 10 10'>
        <path
          fill='#CAAFA7'
          d='M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z'
        />
      </svg>
    </button>
  </li>
);

export default CartItem;
