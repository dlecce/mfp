import React, {lazy, Suspense, useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
const NewsApp = lazy(() => import('./components/NewsApp'));

const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthApp onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/news" component={NewsApp} />
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardApp />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
} 