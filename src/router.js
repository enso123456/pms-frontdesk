import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './component/App/App';

function Index() {
  return <h2>Home</h2>;
}

function Guests() {
  return <h2>Guests</h2>;
}

function Rooms() {
  return <h2>Rooms</h2>;
}

function Users() {
  return <h2>Reservation</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={Index} />
          <Route exact path="/guests/" component={Guests} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/reservations/" component={Users} />
        </App>
      </Switch>
    </Router>
  );
}

export default AppRouter;