import React             from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute      from "./components/AppliedRoute";
//Containers
	import Home     from "./containers/Home";
	import NotFound from "./containers/NotFound";
	import Login    from "./containers/Login";

export default function Routes({ appProps }) {
  return (
    <Switch>
      	<AppliedRoute path="/"      exact component={Home}  appProps={appProps}/>
      	<AppliedRoute path="/login" exact component={Login} appProps={appProps}/>
      	
        { /* Depois de checar todas as rotas e não encontrar (notFound) */ }
		    <Route component={NotFound} />
    </Switch>
  );
}