import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CartWidget } from './CartWidget.js'


const Navbarr = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="../public/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    i Wonder
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Accesorios</Nav.Link>
                        <NavDropdown title="Carrito" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ver carrito</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cancelar compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Finalizar compra</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}

export default Navbarr;