import React from 'react';

const OrderItem = ({ name, amount, price, image }) => (
  <li className='flex justify-between items-center border-b-2 pb-4 last:pb-6 border-rose-100'>
    <div className='grid grid-cols-[1fr_max-content] xs:gap-3 gap-4'>
      <img className='rounded-xl w-12 h-12 justify-center' src={image.thumbnail} alt={name} />

      <div className='grid grid-rows-[min-content_min-content] gap-1'>
        <p className='heading4 ellipsis'>{name}</p>
        <div className='flex xs:gap-3 sm:justify-between items-center sm:max-w-24'>
          <span className='text-primary font-bold'>{amount}x</span>
          <span className='text-rose-400'>@ ${price.toFixed(2)}</span>
        </div>
      </div>
    </div>

    <span className='text-rose-900 font-bold'>${price.toFixed(2)}</span>
  </li>
);

export default OrderItem;
