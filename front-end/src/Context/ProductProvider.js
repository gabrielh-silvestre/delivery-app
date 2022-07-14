import PropTypes from 'prop-types';
import React, { useState } from 'react';
import context from './ProductsContext';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = {
    products,
    setProducts,
  };

  return (
    <context.ProductProvider value={ contextValue }>
      { children }
    </context.ProductProvider>
  );
}

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
