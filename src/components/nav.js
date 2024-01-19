
import { Navbar, Container, Nav, Form, NavDropdown, Button } from 'react-bootstrap';
import logoImg from '../sources/Co_Create_Logo_blue.png';

const OurNav = () => { //Lambda style of return, is more compact and cleaner
        

    const navbarStyle = {
        backgroundColor: '#7CC0CB', // Replace with your desired color code
      };
    
    return (
        <>
        <Navbar style={navbarStyle}>
            <Container className="d-inline-block">
              <Navbar.Brand href="/">
              <img
                    alt="LOGO"
                    src={logoImg}
                    width="60"
                    height="60"
                    className="d-inline-block"
                  />{' '}
              </Navbar.Brand>
                <Nav>
                  <Nav.Link href="#home">
                  <img
                    alt="USERNAME IMG"
                    src="#"
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />{' '}
                  Username</Nav.Link>
                  <img
                    alt="MSG"
                    src="#"
                    width="30"
                    height="30"
                    className="d-inline-block"
                  />{' '}
                
                </Nav>
                  <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
            </Container>
          </Navbar>
        </>      
        );
    };

export default OurNav;