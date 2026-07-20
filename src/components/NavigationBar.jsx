import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import "../assets/css/NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="shadow-sm py-2"
    >
      <Container fluid="lg">
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center"
        >
          <img
            src={logo}
            alt="Life Care Pathology"
            width="60"
            height="60"
            className="rounded-circle me-3"
          />

          <div>
            <h5 className="mb-0 fw-bold text-success">
              LIFE CARE PATHOLOGY
            </h5>

            <small className="text-muted">
              Accurate Diagnostic Services
            </small>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link href="#hero">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#services">Services</Nav.Link>

            <Nav.Link href="#packages">Packages</Nav.Link>

            <Nav.Link href="#appointment">
              Appointment
            </Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;