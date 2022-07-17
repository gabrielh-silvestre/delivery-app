import React, { useState, useEffect, useContext } from 'react';
import context from '../../../Context/Context';
import './CheckoutForm.css';

function CheckoutForm() {
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const { sellerList } = useContext(context);

  useEffect(() => {
    if (sellerList[0] && sellerList[0].name) {
      setSeller(sellerList[0].name);
    }
  }, [sellerList]);

  return (
    <form>
      <div className="form-input">
        <div className="form-input-seller">
          <h4>Vendedor:</h4>
          <select
            value={ seller }
            onChange={ ({ target }) => setSeller(target.value) }
            data-testid="customer_checkout__select-seller"
          >
            {sellerList.map(({ id, name }) => (
              <option key={ id } value={ name }>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-input-address">
          <h4>Endereço:</h4>
          <input
            type="text"
            placeholder="Rua - Bairro - Estado - País"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
            data-testid="customer_checkout__input-address"
          />
        </div>
        <div className="form-input-number">
          <h4>Número:</h4>
          <input
            type="text"
            value={ number }
            onChange={ ({ target }) => setNumber(target.value) }
            data-testid="customer_checkout__input-addressNumber"
          />
        </div>
      </div>
      <button
        type="submit"
        className="form-button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default CheckoutForm;
