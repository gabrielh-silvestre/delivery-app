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
            <span>{ price }</span>
            <img src={ image } alt={ name } />

            <span>{ name }</span>

            <button type="button">-</button>
            <span>{ price }</span>
            <button type="button">+</button>
          </div>
        ))}
      </main>

    </div>
  );
}

export default Products;
