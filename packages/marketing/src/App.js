import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default function App({ history }) {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}