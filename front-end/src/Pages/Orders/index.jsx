import React from 'react';
import NavBar from '../../Components/Navbar';
import './orders.css';

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
      <div className="orders_page">
        <div className="orders_page_cards">
          <h1>Meus pedidos</h1>
        </div>
      </div>
    </>
  );
}

export default Orders;
