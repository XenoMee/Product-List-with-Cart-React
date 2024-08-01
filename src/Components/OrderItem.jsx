import React from 'react';

const OrderItem = ({ name, amount, price, image }) => (
  <li className='flex justify-between items-center py-4 border-b-2 border-rose-100'>
    <div className='grid grid-cols-[1fr_max-content] gap-4'>
      <div>
        <img className='rounded-xl w-[3.5rem] h-[3.5rem]' src={image.thumbnail} alt={name} />
      </div>
      <div className='grid grid-rows-[min-content_min-content] gap-1'>
        <h4 className='heading4'>{name}</h4>
        <div className='flex justify-between items-center max-w-24'>
          <span className='text-primary font-bold'>{amount}x</span>
          <span className='text-rose-400'>@ ${price.toFixed(2)}</span>
        </div>
      </div>
    </div>

    <span className='text-rose-900 font-bold'>${price.toFixed(2)}</span>
  </li>
);

export default OrderItem;
