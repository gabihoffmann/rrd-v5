import { Link, Route, Switch } from "react-router-dom";
import { ConfigPage } from "./configs";
import React from "react";
import { HomePage } from "../public/home";

const EmployeeModule = React.lazy(() => import("./employee/routes"));

interface PrivateRoutesProps {
  onLogout: () => void;
}
export function PrivateRoutes(props: PrivateRoutesProps) {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/config"}>Config</Link>
          <Link to={"/employee"}>Colaboradores</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <HomePage onLogout={props.onLogout} />
        </Route>

        <React.Suspense fallback={"carregando..."}>
          <Route path={"/config"} component={ConfigPage} />
          <Route path={"/employee"} component={EmployeeModule} />
        </React.Suspense>
      </Switch>
    </React.Fragment>
  );
}
