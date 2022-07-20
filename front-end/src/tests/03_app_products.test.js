import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe(" Products Component", () => {
  test("testa se possui o valor do produto", async () => {
    const { history } = renderWithRouter(<App />);

    const inputEmail = screen.getByTestId('common_login__input-email');
    userEvent.type(inputEmail, 'zebirita@email.com');
   
    const inputPassword = screen.getByTestId('common_login__input-password');
    userEvent.type(inputPassword, '$#zebirita#$');

    const buttonLogin = screen.getByTestId('common_login__button-login');
    userEvent.click(buttonLogin);

  await waitFor(() => {
    const { pathname } = history.location;
    expect(pathname).toBe('/customer/products');
  })
     
    const item = screen.findByTestId('customer_products__element-card-price--1');
    expect(item).toBeDefined();
  });

  test("testa se possui a imagem do produto", async () => {   
    const item = screen.findByTestId('customer_products__img-card-bg-image--1');
    expect(item).toBeDefined();
  });

  test("testa se possui o nome do produto", async () => {   
    const item = screen.findByTestId('customer_products__element-card-title--1');
    expect(item).toBeDefined();
  });

  test("testa se possui o botao de decremento produto", async () => {   
    const item = screen.findByTestId('customer_products__button-card-rm-item--1');
    expect(item).toBeDefined();
  });

  test("testa se possui o botao de incremento do produto", async () => {   
    const item = screen.findByTestId('customer_products__button-card-add-item--1');
    expect(item).toBeDefined();
  });

  test("testa se possui a quantidade selecionada do produto", async () => {   
    const item = screen.findByTestId('customer_products__input-card-quantity--1');
    expect(item).toBeDefined();
  });

  test("testa se possui o botão ver carrinho do produto", async () => {   
    const item = screen.findByTestId('customer_products__checkout-bottom-value');
    expect(item).toBeDefined();
  });
});