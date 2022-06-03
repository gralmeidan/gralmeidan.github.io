import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o Header', () => {
  it('Todas as opções devem ser renderizadas', () => {
    renderWithRouter(<App />);

    const paths = ['/', '/about', '/contact'];

    paths.forEach((path) => {
      const link = screen.getByTestId(`link-${path}`);
      expect(link).toBeInTheDocument();
    });
  });

  it('O botão deve esconder e mostrar as opções de navegação no mobile', () => {
    renderWithRouter(<App />);

    const button = screen.getByTestId('mobile-nav-btn');
    const nav = screen.getByTestId('nav-container');

    expect(button).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('hidden');
    userEvent.click(button);
    expect(nav).not.toHaveClass('hidden');
    userEvent.click(button);
    expect(nav).toHaveClass('hidden');
  });

  it('Os links devem trocar de página', async () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');

    const paths = ['/about', '/contact', '/'];

    await paths.forEach(async (path) => {
      const link = await screen.findByTestId(`link-${path}`);
      userEvent.click(link);
      expect(history.location.pathname).toBe(path);
    });
  });
});
