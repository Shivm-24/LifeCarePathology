import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "../assets/css/ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-muted">
            We'd love to hear from you. Visit our lab or contact us anytime.
          </p>
        </div>

        <Row>

          {/* Contact Details */}

          <Col lg={5} className="mb-4">

            <Card className="shadow border-0 h-100">
              <Card.Body>

                <h4 className="mb-4 text-success">
                  Life Care Pathology
                </h4>

                <p>
                  <FaMapMarkerAlt className="text-danger me-2" />
                  <strong>Address:</strong><br />
                  Life Care Pathology,<br />
                  Near CHC Hospital,<br />
                  Uska Bazar, Siddharth Nagar(U.P)
                </p>

                <hr />

                <p>
                  <FaPhoneAlt className="text-success me-2" />
                  <strong>Phone:</strong><br />
                  +91 9129630100
                </p>

                <hr />

                <p>
                  <FaEnvelope className="text-primary me-2" />
                  <strong>Email:</strong><br />
                  lifecarepathology@gmail.com
                </p>

                <hr />

                <p>
                  <FaClock className="text-warning me-2" />
                  <strong>Working Hours:</strong><br />
                  Monday - Saturday<br />
                  7:00 AM – 7:00 PM
                </p>

                <Button
                  variant="success"
                  href="https://maps.google.com"
                  target="_blank"
                  className="mt-3"
                >
                  Open in Google Maps
                </Button>

              </Card.Body>
            </Card>

          </Col>

          {/* Google Map */}

          <Col lg={7}>

            <div className="ratio ratio-16x9 shadow rounded">

              <iframe
    title="Life Care Pathology Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d284.1410245161707!2d83.11936801916012!3d27.192672079063293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1784543833651!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>

            </div>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default ContactSection;