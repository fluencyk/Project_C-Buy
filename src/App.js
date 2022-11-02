import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import { SignUp } from "./pages/signup/Signup";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { Signout } from "./pages/Signout";
import { RequireAuth } from "./components/RequireAuth";
import { wrapWithHeader } from "./hocs/wrapWithHeader";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/login" element={wrapWithHeader(Login)} />
        <Route exact path="/signout" element={wrapWithHeader(Signout)} />
        <Route exact path="/signup" element={wrapWithHeader(SignUp)} />
        <Route
          exact
          path="/"
          element={<RequireAuth>{wrapWithHeader(Dashboard)}</RequireAuth>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
