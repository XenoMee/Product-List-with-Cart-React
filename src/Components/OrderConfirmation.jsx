import React from 'react';
import OrderItem from './OrderItem';
import totalPrice from '../Utilities/calculateTotalPrice';

const OrderConfirmation = ({ toggleModal, modalActive, chosenItems, newOrder }) => {
  return (
    <div className={`${modalActive ? 'overlay' : ''}`}>
      <div
        className={`modal orderConfirmed grid grid-rows-[min-content_max-content] gap-6 bg-white origin-center ${
          modalActive ? 'scale-100' : 'scale-0'
        }  transition-transform delay-150 ease-in sm:mb-auto`}
        role='dialog'
        aria-hidden={`${!modalActive}`}
      >
        <div className='grid gap-10 sm:text-base'>
          <div>
            <h2 className='heading1'>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
          </div>

          <div className='bg-rose-50 p-6 xxs:p-4 rounded-lg'>
            <ul className='grid gap-4 xxs:gap-2' role='list'>
              {chosenItems.map((item) => (
                <OrderItem
                  key={item.id}
                  name={item.name}
                  amount={item.quantity}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </ul>

            <div className='flex justify-between items-center text-rose-900 mt-6'>
              <p className='font-semibold'>Order Total</p>
              <p className='font-bold text-2xl'>${totalPrice(chosenItems).toFixed(2)}</p>
            </div>
          </div>

          <button
            className='button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark'
            onClick={() => {
              toggleModal();
              newOrder();
            }}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderConfirmation;
