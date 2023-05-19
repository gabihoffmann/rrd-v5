import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { SearchPage } from "./search";
import { DetailsPage } from "./details";

export default function EmployeeRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/search`} component={SearchPage} />
      <Route path={`${path}/details/:id?`} component={DetailsPage} />
      <Redirect to={`${path}/search`} />
    </Switch>
  );
}
