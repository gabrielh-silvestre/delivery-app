import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../Components/Navbar';

function Products() {
  const history = useHistory();
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
    const user = JSON.parse(localStorage.getItem('user'));
    const minimumCharactersForToken = 50;

    if (!user || user.token.length < minimumCharactersForToken) {
      localStorage.removeItem('user');
      history.push('/login');
    }
  });

  return (
    <div>
      <NavBar links={ linksProducts } />
    </div>
  );
}

export default Products;
