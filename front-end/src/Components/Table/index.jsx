import React from 'react';
import './table.css';
import PropTypes from 'prop-types';

// tabela responsiva baseada no vídeo: https://youtu.be/ZtopjfXhUZI

function Table({ products }) {
  return (
    <table className="table">
      <thead>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Romover Item</th>
      </thead>
      <tbody>
        {products.map((current, index) => (
          <tr key={ index }>
            <td
              data-label="Item"
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-label="Descrição"
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {current.name}
            </td>
            <td
              data-label="Quantidade"
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {current.quantity}
            </td>
            <td
              data-label="Valor Unitário"
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {current.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
            <td
              data-label="Item"
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {(current.price * current.quantity).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
            <td
              className="table-remove"
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              Remover
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Table;
