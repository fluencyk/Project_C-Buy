import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import { SignUp } from './pages/signup/Signup';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import { Signout } from './pages/Signout';
import { RequireAuth } from './components/RequireAuth';
import { wrapWithHeader } from './hocs/wrapWithHeader';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route exact path="/login" element={wrapWithHeader(Login)} />
          <Route
            exact
            path="/signout"
            element={
              <RequireAuth>
                <Signout />
              </RequireAuth>
            }
          />
          <Route exact path="/signup" element={wrapWithHeader(SignUp)} />
          <Route
            exact
            path="/"
            element={<RequireAuth>{wrapWithHeader(Dashboard)}</RequireAuth>}
          />
          <Route
            path="*"
            element={
              <RequireAuth>
                <NotFound />
              </RequireAuth>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
