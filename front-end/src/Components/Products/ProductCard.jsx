import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productContext from '../../Context/ProductsContext';

function ProductCard({ cardProduct }) {
  const { id, name, image, price, quantity } = cardProduct;

  const { products, setProducts } = useContext(productContext);
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    if (products.quantity <= 0) setActiveButton(false);
    else setActiveButton(true);
  }, [products]);

  const handleRemoveItem = () => {
    cardProduct.quantity -= 1;

    if (products.find((item) => item.id === id) === undefined) {
      return setProducts((prevProducts) => {
        prevProducts.push(cardProduct);
        return prevProducts;
      });
    }

    setProducts((prevProducts) => {
      const product = prevProducts.find((item) => item.id === id);
      product.quantity -= 1;
      return prevProducts;
    });
  };

  const handleAddItem = () => {
    cardProduct.quantity += 1;

    if (products.find((item) => item.id === id) === undefined) {
      return setProducts((prevProducts) => {
        prevProducts.push(cardProduct);
        return prevProducts;
      });
    }

    setProducts((prevProducts) => {
      const product = prevProducts.find((item) => item.id === id);
      product.quantity += 1;
      return prevProducts;
    });
  };

  return (
    <div>

      <span data-testid={ `customer_products__element-card-price-${id}` }>
        { price }
      </span>

      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
      />

      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        disabled={ !activeButton }
        onClick={ handleRemoveItem }
      >
        -
      </button>
      <span data-testid={ `customer_products__input-card-quantity-${id}` }>
        { quantity }
      </span>
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ handleAddItem }
      >
        +
      </button>
    </div>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  cardProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
