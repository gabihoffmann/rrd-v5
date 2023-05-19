import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/public/login";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./pages/private/routes";

export function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("isAuth:", isAuthenticated);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  /**
   * React Router DOM
   *
   * Sempre irá comparar a string e assim determinará que componente será exibido
   */

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"}>
          <LoginPage onLogin={handleLogin} isAuthenticated={isAuthenticated} />
        </Route>

        {isAuthenticated && <PrivateRoutes onLogout={handleLogout} />}

        {!isAuthenticated && <Redirect to={"/login"} />}
      </Switch>
    </BrowserRouter>
  );
}
