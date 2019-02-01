import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './lib/history';
import routes from './routes';
import LoadingScreen from './components/layout/LoadingScreen';
import DefaultLayout from './components/layout/DefaultLayout';
import NotFound from './components/layout/NotFound';

const App = () => (
  <Router history={history}>
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact
            render={({ location, match }) => {
              const props = {
                location,
                match,
              };

              const Layout = route.layout || DefaultLayout;

              return (
                <Layout {...props}>
                  <route.component {...props} />
                </Layout>
              );
            }}
          />
        ))}

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
