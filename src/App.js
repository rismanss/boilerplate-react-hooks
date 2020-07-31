import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from './routes';
import Header from './component/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <hr />
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