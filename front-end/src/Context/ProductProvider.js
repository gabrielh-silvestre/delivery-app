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
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
