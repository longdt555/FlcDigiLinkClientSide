import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {routes, RouteWithSubRoutes} from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
