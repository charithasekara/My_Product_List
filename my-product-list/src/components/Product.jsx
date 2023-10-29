import React, { useState, useEffect } from 'react';
import '../App.css';

const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const updateImageIndex = () => {
      setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const intervalId = setInterval(updateImageIndex, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [product]);

  return (
    <div className="product">
      <img src={`/assets/${product.images[imageIndex]}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className='button-up'>
      <button>Pay</button>
        <button>Cash</button>
        <button>Card</button>
        <button>Credit</button>
      </div>
      
    </div>
  );
};

export default Product;
