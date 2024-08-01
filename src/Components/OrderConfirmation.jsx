import React from 'react';
import OrderItem from './OrderItem';
import totalPrice from '../Utilities/calculateTotalPrice';

const OrderConfirmation = ({ toggleModal, modalActive, chosenItems }) => {
  return (
    <div className={`${modalActive ? 'overlay' : ''}`}>
      <div
        className={`modal orderConfirmed grid grid-rows-[min-content_max-content] gap-6 bg-white p-10 origin-center ${
          modalActive ? 'scale-100' : 'scale-0'
        }  transition-transform delay-150 ease-in overflow-y-scroll`}
        aria-hidden={`${!modalActive}`}
      >
        <div className='grid gap-10 text-base'>
          <div>
            <h2 className='heading1'>Order confirmed</h2>
            <p>We hope you enjoy your food!</p>
          </div>

          <div className='bg-rose-50 px-8 py-2'>
            <ul className='grid gap-4' role='list'>
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

            <div className='flex justify-between items-center text-rose-900 py-6'>
              <p>Order total</p>
              <p className='font-bold text-2xl'>${totalPrice(chosenItems).toFixed(2)}</p>
            </div>
          </div>

          <button
            className='button py-4 bg-primary text-white text-base hover:text-white hover:bg-primary-dark'
            onClick={toggleModal}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderConfirmation;
