import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

interface LoginPageProps {
  onLogin: () => void;
  isAuthenticated: boolean;
}
export function LoginPage(props: LoginPageProps) {
  const history = useHistory();

  const handleLogin = useCallback(() => {
    history.push("/");
  }, [history]);

  useEffect(() => {
    if (props.isAuthenticated) {
      handleLogin();
    }
  }, [props.isAuthenticated, handleLogin]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={props.onLogin}>logar</button>
    </div>
  );
}
