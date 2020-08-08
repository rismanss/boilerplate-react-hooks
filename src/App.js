import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from './routes';
import {Header} from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i.toString()}
            path={route.path}
            exact={route.exact}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;