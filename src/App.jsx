import React, { useState } from 'react';
import data from './Data/data';
import Dessert from './Components/Dessert';
import EmptyCart from './Components/EmptyCart';

const App = () => {
  const [products, setProducts] = useState(data);
  const [itemQuantity, setItemQuantity] = useState(0);

  const increaseItemQuantity = (id, quantity) => {
    setItemQuantity((prevItemQuantity) => prevItemQuantity + 1);
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        product.id === id ? { ...product, quantity: quantity } : product;
      })
    );
  };

  const decreaseItemQuantity = () => {
    setItemQuantity((prevItemQuantity) => prevItemQuantity - 1);
  };

  return (
    <>
      <div className='container grid gap-8 lg:grid-cols-[.7fr_.3fr] lg:gap-10'>
        <div className='grid gap-8'>
          <h1 className='heading1'>Desserts</h1>
          <ul className='grid max-w-[800px] ss:grid-cols-auto-fit-250 sm:grid-cols-3 gap-8' role='list'>
            {products.map((product) => (
              <li key={product.id}>
                <Dessert
                  id={product.id}
                  name={product.name}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  quantity={itemQuantity}
                  image={product.image}
                  addItem={increaseItemQuantity}
                  removeItem={decreaseItemQuantity}
                />
              </li>
            ))}
          </ul>
        </div>

        <EmptyCart />
      </div>
    </>
  );
};

export default App;
