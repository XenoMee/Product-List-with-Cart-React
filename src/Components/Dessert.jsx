import React from 'react';
import CartButton from './CartButton';
import ItemQuantityButton from './ItemQuantityButton';

const Dessert = ({ id, name, price, category, quantity, image, addItem, removeItem }) => {
  return (
    <div className='grid gap-10 relative'>
      <div className='grid'>
        <h3 className='text-rose-900 font-bold'>{name}</h3>
        <p className='-order-1 text-rose-500 text-sm'>{category}</p>
        <span className='text-primary text-base font-semibold '>${price.toFixed(2)}</span>
      </div>
      <picture className='-order-1'>
        <source media='(min-width: 768px)' srcSet={`${image.tablet}`} />
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
        <CartButton addItemToCart={() => addItem(id, quantity)} />
      )}
    </div>
  );
};

export default Dessert;
