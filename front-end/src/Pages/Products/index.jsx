import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/Navbar';
import getProducts from '../../API/GetProducts';
import ProductCard from '../../Components/Products/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  const linksProducts = [
    {
      name: 'Produtos',
      link: '/customer/products',
      testid: 'customer_products__element-navbar-link-products',
    },
    {
      name: 'Meus pedidos',
      link: '/customer/orders',
      testid: 'customer_products__element-navbar-link-orders',
    },
  ];

  useEffect(() => {
    const componentDidMount = async () => {
      const allProducts = await getProducts();
      allProducts.forEach((item) => { item.quantity = 0; });
      setProducts(allProducts);
    };

    componentDidMount();
  }, []);

  return (
    <div>
      <NavBar links={ linksProducts } />

      <main>
        {
          products.map((product) => (
            <ProductCard key={ product.id } cardProduct={ product } />
          ))
        }
      </main>
    </div>
  );
}

export default Products;
