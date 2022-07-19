import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React from 'react';
// import './cardOrders.css';

function CardOrders({ order }) {
  const history = useHistory();

  const handleChangeDatails = () => {
    history.push(`/customer/orders/${order.id}`);
  };

  return (
    <div
      onClick={ handleChangeDatails }
      onKeyPress={ handleChangeDatails }
      role="button"
      tabIndex={ order.id }
    >
      <div>
        <p>Pedido</p>
        <h4 data-testid={ `customer_orders__element-order-id-${order.id}` }>
          {order.id}
        </h4>
      </div>
      <div>
        <h3
          data-testid={ `customer_orders__element-delivery-status-${order.id}` }
        >
          {order.status}
        </h3>
      </div>
      <div>
        <h4 data-testid={ `customer_orders__element-order-date-${order.id}` }>
          {new Intl.DateTimeFormat('pt-br').format(new Date(order.saleDate))}
        </h4>
        <h4 data-testid={ `customer_orders__element-card-price-${order.id}` }>
          {Number(order.totalPrice).toFixed(2).replace('.', ',')}
        </h4>
      </div>
    </div>
  );
}

CardOrders.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOrders;
