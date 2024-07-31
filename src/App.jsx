import React, { useState } from 'react';
import data from './Data/data';
import Dessert from './Components/Dessert';
import EmptyCart from './Components/EmptyCart';

const App = () => {
  const [products, setProducts] = useState(data);
  const [itemQuantity, setItemQuantity] = useState(0);

  const increaseItemQuantity = (id, quantity) => {
    setItemQuantity((prevItemQuantity) => prevItemQuantity + 1);
  };

  const decreaseItemQuantity = () => {
    setItemQuantity((prevItemQuantity) => prevItemQuantity - 1);
  };

  return (
    <>
      <div className='container grid gap-8'>
        <div>
          <h1 className='heading1'>Desserts</h1>
          <ul className='grid gap-8' role='list'>
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
