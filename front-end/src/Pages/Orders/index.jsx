import React from 'react';
import NavBar from '../../Components/Navbar';

function Orders() {
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
    <>
      <NavBar links={ linksProducts } />
      <h1>Meus pedidos</h1>
    </>
  );
}

export default Orders;
