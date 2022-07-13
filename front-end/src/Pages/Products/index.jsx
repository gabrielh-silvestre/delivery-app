import React from 'react';
import NavBar from '../../Components/Navbar';

function Products() {
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

  return (
    <div>
      <NavBar links={ linksProducts } />
    </div>
  );
}

export default Products;
