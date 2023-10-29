import React, { useState, useEffect, useRef } from 'react';
import Product from './Product';
import productData from '../data/products.json';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showCount, setShowCount] = useState(8);

  const containerRef = useRef(null);

  // Load initial products from JSON
  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData.slice(0, showCount));
  }, []);

  // should filtering and search logic here

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition >= container.offsetTop + container.offsetHeight) {
        // User has scrolled to the bottom, load more products
        const newShowCount = showCount + 8;
        setFilteredProducts(productData.slice(0, newShowCount));
        setShowCount(newShowCount);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showCount]);

  return (
    <div>
      <input type="text" placeholder="Search..." />
      <div className="product-list" ref={containerRef}>
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
