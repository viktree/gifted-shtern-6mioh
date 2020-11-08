import * as React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { About, Users, Topics, Home } from './Pages';

const AppRoutes = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
    <Route path="/topics" component={Topics} />
    <Route path="/" component={Home} />
  </Switch>
);

const AppRouter = (props: any) => (
  <Auth0Provider
    domain={process.env.DOMAIN || ''}
    clientId={process.env.CLIENT_ID || ''}
    redirectUri={process.env.REDIRECT_URI || ''}
  >
    <BrowserRouter>
      {props.children}
      <AppRoutes />
    </BrowserRouter>
  </Auth0Provider>
);

export default AppRouter;
