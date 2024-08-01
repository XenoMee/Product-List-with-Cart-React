import React, { useState } from 'react';
import data from './Data/data';
import updateProductQuantity from './Utilities/updateProductQuantity';
import totalCartItems from './Utilities/calculateTotalItems';
import Dessert from './Components/Dessert';
import EmptyCart from './Components/EmptyCart';
import FilledCart from './Components/FilledCart';
import OrderConfirmation from './Components/OrderConfirmation';

const App = () => {
  const [products, setProducts] = useState(data);
  const [modal, setModal] = useState(false);

  const increaseItemQuantity = (id, quantity = 1) => {
    setProducts(updateProductQuantity({ id, products, quantity }));
  };

  const decreaseItemQuantity = (id, quantity = 1) => {
    setProducts(updateProductQuantity({ id, products, quantity: -quantity }));
  };

  const startNewOrder = () => setProducts(data);
  const toggleModal = () => setModal((prevModal) => !prevModal);
  const cartItems = products.filter((product) => product.quantity > 0);

  return (
    <>
      <div className='container grid gap-8 lg:grid-cols-[.7fr_.3fr] lg:gap-10'>
        <div className='grid gap-8'>
          <h1 className='heading1'>Desserts</h1>
          <ul className='grid max-w-[800px] ss:grid-cols-auto-fit-250 sm:grid-cols-3 gap-8' role='list'>
            {products.map((product) => (
              <li key={product.id}>
                <Dessert
                  name={product.name}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  quantity={product.quantity}
                  image={product.image}
                  addItem={() => increaseItemQuantity(product.id)}
                  removeItem={() => decreaseItemQuantity(product.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        {totalCartItems(products) ? (
          <FilledCart amountItems={totalCartItems(products)} availableItems={cartItems} toggleModal={toggleModal} />
        ) : (
          <EmptyCart />
        )}

        <OrderConfirmation
          toggleModal={toggleModal}
          modalActive={modal}
          chosenItems={cartItems}
          newOrder={startNewOrder}
        />
      </div>
    </>
  );
};

export default App;
