import React, { useEffect, useState } from 'react';
import getProducts from '../../API/GetProducts';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const componentDidMount = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    componentDidMount();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>

      <main>
        {products.map(({ id, name, image, price }) => (
          <div key={ id }>

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
            >
              -
            </button>
            <span data-testid={ `customer_products__input-card-quantity-${id}` }>0</span>
            <button
              data-testid={ `customer_products__button-card-add-item-${id}` }
              type="button"
            >
              +
            </button>
          </div>
        ))}
      </main>

    </div>
  );
}

export default Products;
