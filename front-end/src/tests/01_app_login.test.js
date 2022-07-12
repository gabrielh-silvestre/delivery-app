import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputEmail = screen.getByTestId('common_login__input-email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'adm@deliveryapp.com');
  expect(inputEmail).toHaveValue('adm@deliveryapp.com');

  const inputPassword = screen.getByTestId('input-password');
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toHaveValue('');
  userEvent.type(inputPassword, '--adm2@21!!--');
  expect(inputPassword).toHaveValue('--adm2@21!!--');
});