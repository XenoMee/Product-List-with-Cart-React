import React from 'react';
import CartButton from './CartButton';
import ItemQuantityButton from './ItemQuantityButton';

const Dessert = ({ name, price, category, quantity, image, addItem, removeItem }) => {
  return (
    <div className='grid gap-10 relative'>
      <div className='grid'>
        <p className='heading3'>{name}</p>
        <p className='-order-1 text-rose-500 text-sm'>{category}</p>
        <span className='text-primary text-base font-semibold '>${price.toFixed(2)}</span>
      </div>
      <picture className='-order-1'>
        <source media='(min-width: 785px)' srcSet={`${image.tablet}`} />
        <source media='(min-width: 1024px)' srcSet={`${image.desktop}`} />
        <img
          className={`${quantity > 0 ? 'border-[2px] border-primary object-contain' : ''}  rounded-lg`}
          src={`${image.mobile}`}
          alt={`${name}`}
        />
      </picture>

      {quantity ? (
        <ItemQuantityButton itemQuantity={quantity} increaseQuantity={addItem} decreaseQuantity={removeItem} />
      ) : (
        <CartButton addItemToCart={addItem} />
      )}
    </div>
  );
};

export default Dessert;
