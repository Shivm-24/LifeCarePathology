import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import LabPic from "../assets/images/MedicalLab.jfif";
import "../assets/css/Hero.css";
import { openWhatsApp } from "../utils/whatsapp";

function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center"
     style={{ minHeight: "90vh" }} >
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <h5 className="text-success fw-bold mb-3">
              Welcome to Life Care Pathology
            </h5>

            <h1 className="display-4 fw-bold mb-4">
              Accurate & Reliable
              <span className="text-primary"> Diagnostic Services</span>
            </h1>

            <p className="lead text-muted">
              We provide high-quality pathology services with fast, accurate,
              and affordable diagnostic testing for your family's healthcare
              needs.
            </p>

            <div className="my-4">
              <p><FaCheckCircle className="text-success me-2" /> Fully Computerized Lab</p>
              <p><FaCheckCircle className="text-success me-2" /> Home Sample Collection</p>
              <p><FaCheckCircle className="text-success me-2" /> Accurate Reports</p>
              <p><FaCheckCircle className="text-success me-2" /> Open 7 AM – 7 PM</p>
            </div>

            <Button variant="success" size="lg" className="me-3" onClick={() =>
            openWhatsApp(`Hello Life Care Pathology,

I would like to book an appointment.

Name:
Mobile:
Preferred Date:
Required Test:`)
    }
>
  <FaCalendarCheck className="me-2" />
  Book Appointment
</Button>

            <Button
  variant="outline-primary"
  size="lg"
  onClick={() =>
    openWhatsApp(`Hello Life Care Pathology,

Please call me regarding pathology services.`)
  }
>
  <FaPhoneAlt className="me-2" />
  WhatsApp Us
</Button>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={LabPic}
              alt="Medical Lab"
              className="img-fluid rounded shadow"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Hero;