import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap';
import logoImg from '../sources/Co_Create_Logo_blue.png';

const OurNav = () => { //Lambda style of return, is more compact and cleaner
        return (
        <>
        <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
              <img
                    alt="LOGO"
                    src={logoImg}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                  />{' '}
              </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">
                  <img
                    alt="PIC"
                    src="#"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  Username</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <img
                    alt="MSG"
                    src="#"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
            </Container>
          </Navbar>
        </>      
        );
    };

export default OurNav;