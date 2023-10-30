import React, { useState, useEffect } from 'react';
import productData from '../data/products.json';
import '../App.css';

const Product = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateImageIndex = () => {
      if (isHovered) {
        // Change the image only when hovered
        setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
      }
    };

    const intervalId = setInterval(updateImageIndex, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [product, isHovered]);

  return (
    <div
      className={`product ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
