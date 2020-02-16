import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Button, Nav, Navbar} from 'react-bootstrap';

//test


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home"
import MyLoans from "./MyLoans"
import Borrow from "./Borrow"
import WallOfShame from './WallOfShame'

export default function App() {
  
  return (
    <>
    <Navbar bg="dark" variant="light">
      <Navbar.Brand href="#home">Loan Platform</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">My Loans</Nav.Link>
          <Nav.Link href="/Borrow">Borrow</Nav.Link>
          <Nav.Link href="/WallOfShame">Wall Of Shame</Nav.Link>
        </Nav>
      </Navbar>
    <Router>
      <Switch>
        <Route path="/Borrow"><Borrow /></Route>
        <Route path="/WallOfShame"><WallOfShame/></Route>
        <Route exact path="/"><MyLoans /></Route>
      </Switch>
    </Router>
    </>
  );
}