import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHospital,
  FaBullseye,
  FaEye,
  FaUsers,
} from "react-icons/fa";
import "../assets/css/AboutSection.css";


function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <Container>

        <Row className="align-items-center">

          <Col lg={6}>

            <h5 className="text-success fw-bold">
              About Us
            </h5>

            <h2 className="fw-bold mb-4">
              Welcome to Life Care Pathology
            </h2>

            <p className="text-muted">
              Life Care Pathology is committed to providing accurate,
              reliable, and affordable diagnostic services. Our modern
              laboratory is equipped with advanced technology and operated
              by experienced professionals to ensure quality healthcare for
              every patient.
            </p>

            <Row className="mt-4">

              <Col md={6} className="mb-3">

                <Card className="border-0 shadow-sm h-100">

                  <Card.Body>

                    <FaBullseye size={40} className="text-success mb-3"/>

                    <h5>Our Mission</h5>

                    <p>
                      Deliver accurate diagnostic services with care,
                      quality, and timely reporting.
                    </p>

                  </Card.Body>

                </Card>

              </Col>

              <Col md={6} className="mb-3">

                <Card className="border-0 shadow-sm h-100">

                  <Card.Body>

                    <FaEye size={40} className="text-primary mb-3"/>

                    <h5>Our Vision</h5>

                    <p>
                      To become the most trusted pathology laboratory
                      in the region.
                    </p>

                  </Card.Body>

                </Card>

              </Col>

            </Row>

          </Col>

          <Col lg={6}>

            <Row>

              <Col md={6} className="mb-4">

                <Card className="text-center shadow border-0">

                  <Card.Body>

                    <FaHospital
                      size={45}
                      className="text-success mb-3"
                    />

                    <h3>10+</h3>

                    <p>Years of Service</p>

                  </Card.Body>

                </Card>

              </Col>

              <Col md={6} className="mb-4">

                <Card className="text-center shadow border-0">

                  <Card.Body>

                    <FaUsers
                      size={45}
                      className="text-primary mb-3"
                    />

                    <h3>5000+</h3>

                    <p>Happy Patients</p>

                  </Card.Body>

                </Card>

              </Col>

              <Col md={6} className="mb-4">

                <Card className="text-center shadow border-0">

                  <Card.Body>

                    <h3>50+</h3>

                    <p>Available Tests</p>

                  </Card.Body>

                </Card>

              </Col>

              <Col md={6} className="mb-4">

                <Card className="text-center shadow border-0">

                  <Card.Body>

                    <h3>24x7</h3>

                    <p>Emergency Support</p>

                  </Card.Body>

                </Card>

              </Col>

            </Row>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default AboutSection;