import React from 'react'; 
import { Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Components/Home/home';
import SideNav from './sideNav'
import Dashboard from "./Components/Dashboard/Dashboard";
import PendingRequisitions from "./Components/Pending Requisitions/PendingRequisitions";
import ViewOrder from "./Components/View Order/ViewOrder";
import Login from "./Components/Login/Login";
function App() {
  return (
        <div className="App">
            {/*<Login/>*/}
          <SideNav />
          {/* <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          </Router> */}



        </div>

  );
}

export default App;
