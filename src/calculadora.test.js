import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';


describe('Calculadora', () => {
  test('deve renderizar o componente sem erros', () => {
    render(<Calculadora />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});


