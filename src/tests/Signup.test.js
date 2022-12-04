import { render, screen } from '@testing-library/react';
import { SignUp } from '../pages/signup/Signup';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

describe('Login Tests', () => {
  const renderComp = () =>
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthProvider>
          <CartProvider>
            <SignUp />
          </CartProvider>
        </AuthProvider>
      </MemoryRouter>,
    );

  test('renders email and password texts', async () => {
    renderComp();
    expect(await screen.findByText(/Email/i)).toBeInTheDocument();
    expect(await screen.findByText('Password')).toBeInTheDocument();
    expect(await screen.findByText(/confirm password/i)).toBeInTheDocument();
  });

  test('renders Signup link', async () => {
    renderComp();
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  });
});
