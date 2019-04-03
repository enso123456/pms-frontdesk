import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from '../Container/Container';

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
      <Container>
        <Route path="/" exact component={Index} />
        <Route path="/guests/" component={Guests} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/reservations/" component={Users} />
      </Container>
    </Router >
  );
}

export default AppRouter;