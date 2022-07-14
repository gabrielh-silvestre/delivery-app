import React, { useEffect, useState } from 'react';
import getProducts from '../../API/GetProducts';
import ProductCard from '../../Components/Products/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const componentDidMount = async () => {
      const allProducts = await getProducts();
      allProducts.quantity = 0;
      setProducts(allProducts);
    };

    componentDidMount();
  }, []);

  return (
    <main>
      {
        products.map((product) => (
          <ProductCard key={ product.id } cardProduct={ product } />
        ))
      }
    </main>
  );
}

export default Products;
