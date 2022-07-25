import React, { useState, useEffect } from 'react';
import FetchOrders from '../../API/FetchOrders';
import CardOrders from '../../Components/CardOrders';
import NavBar from '../../Components/Navbar';
import { fetchInformationFromLocalstorage } from '../../Service/LocalSotorage';
import './orders.css';

function Orders() {
  const [orderList, setOrderList] = useState([]);
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
    const fetch = async () => {
      const { token } = fetchInformationFromLocalstorage('user');
      const response = await FetchOrders(token);
      setOrderList(response);
    };
    fetch();
  }, []);

  useEffect(() => {
  }, [orderList]);

  return (
    <>
      <NavBar links={ linksProducts } />
      <div className="orders_page">
        <div className="orders_page_cards">
          {orderList.length > 1
            ? orderList.map((current) => (
              <div key={ current.id }>
                <CardOrders order={ current } user="customer" />
              </div>
            ))
          : <h3>Você ainda não fez nenhuma compra.</h3>}
        </div>
      </div>
    </>
  );
}

export default Orders;
