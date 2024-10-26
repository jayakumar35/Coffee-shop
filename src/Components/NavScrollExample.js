import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import './NavScrollExample.scss'
import coffelogo from './image/coffeelogo.png'

function NavScrollExample() { 
  return (
    <Navbar   expand="lg" className="navbar">
      <Container >
      <img
              src={coffelogo}
              
              className=" coffeelogo d-inline-block align-top "
              alt="React Bootstrap logo"
            />
        <Navbar.Brand className='brand ' href="#"> Coffee Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='link' href="#action1">Home</Nav.Link>
            <Nav.Link  className='link' href="#action2">About</Nav.Link>
            <Nav.Link  className='link' href="#action2">Services</Nav.Link>
            <Nav.Link  className='link' href="#action2">Menu</Nav.Link>


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;