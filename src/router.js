import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from './component/App/App';
import GuestPage from './container/Guest/GuestPage';
import RoomPage from './container/Rooms/RoomPage';
import ReservationPage from './container/Reservation/ReservationPage';

function Index() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <AppContainer>
          <Route exact path="/" component={Index} />
          <Route exact path="/guests/" component={GuestPage} />
          <Route exact path="/rooms/" component={RoomPage} />
          <Route exact path="/reservations/" component={ReservationPage} />
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default AppRouter;