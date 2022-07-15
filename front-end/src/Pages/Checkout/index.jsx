import React, { useState, useEffect } from 'react';
import searchUser from '../../API/searchUser';
import NavBar from '../../Components/Navbar';
import Table from '../../Components/Table';
import { fetchInformationFromLocalstorage } from '../../Service/LocalSotorage';
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

  const [sellers, setSellers] = useState('');

  useEffect(() => {
    const user = fetchInformationFromLocalstorage('user');

    const fetchData = async () => {
      const data = await await searchUser(user.token);
      setSellers(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('olá');
    console.log(sellers);
  }, [sellers]);

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
              Valor total:
              {` ${products
                .reduce(
                  (previous, current) => previous + current.price * current.quantity,
                  0,
                )
                .toLocaleString('pt-br', { minimumFractionDigits: 2 })}`}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <h1 className="checkout-title">Detalhes para entrega</h1>
        <div className="checkout-main-content">
          <div className="checkout-order-list">
            <Table products={ products } />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
