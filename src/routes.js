import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Ocorrencias from "./components/Consulta";
import FormOcorrencias from "./components/FormularioCadastro";
import Dashboard from "./components/Charts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ocorrencias" exact component={Ocorrencias} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/ocorrencias_cadastro" exact component={FormOcorrencias} />
    </Switch>
  );
};

export default Routes;