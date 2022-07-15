import React from 'react';
import NavBar from '../../Components/Navbar';
import Table from '../../Components/Table';
import './checkout.css';

function Checkout() {
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

  const products = [
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
    {
      name: 'Produtos',
      price: 100.92,
      quantity: 5,
    },
  ];

  return (
    <>
      <NavBar links={ linksProducts } />
      <div>
        <h1 className="checkout-title">Carrinho</h1>
        <div className="checkout-main-content">
          <div className="checkout-order-list">
            <Table products={ products } />
            <h3
              className="chackout-amount"
              data-testid="customer_checkout__element-order-total-price"
            >
              {`Valor total: ${products
                .reduce(
                  (previous, current) => previous + current.preco * current.quantidade,
                  0,
                )
                .toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
