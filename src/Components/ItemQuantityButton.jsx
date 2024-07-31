import React from 'react';

const ItemQuantityButton = ({ itemQuantity, increaseQuantity, decreaseQuantity }) => (
  <div className='flex justify-between items-center w-36 absolute justify-self-center bottom-[90px] font-semibold bg-primary text-white py-2 px-4 rounded-full'>
    <button
      aria-label='Decrease quantity'
      className='flex items-center justify-center border border-white w-5 h-5 rounded-full'
      onClick={decreaseQuantity}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none' viewBox='0 0 10 2'>
        <path d='M0 .375h10v1.25H0V.375Z' className='fill-white' />
      </svg>
    </button>
    <span>{itemQuantity}</span>
    <button
      aria-label='Increase quantity'
      className='flex items-center justify-center border border-white w-5 h-5 rounded-full'
      onClick={increaseQuantity}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='none' viewBox='0 0 10 10'>
        <path d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z' className='fill-white' />
      </svg>
    </button>
  </div>
);

export default ItemQuantityButton;
