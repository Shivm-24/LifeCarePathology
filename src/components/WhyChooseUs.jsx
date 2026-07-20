import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserMd,
  FaClock,
  FaHome,
  FaAward,
} from "react-icons/fa";
import "../assets/css/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section py-5">

      <Container>

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Why Choose Life Care?
          </h2>

          <p className="text-muted">
            We are committed to providing accurate, affordable and timely
            diagnostic services.
          </p>

        </div>

        <Row>

          <Col md={6} lg={3} className="text-center mb-4">

            <div className="feature-box">

              <FaUserMd size={55} className="text-success mb-3"/>

              <h5>Experienced Staff</h5>

              <p>
                Qualified professionals delivering trusted diagnostic services.
              </p>

            </div>

          </Col>

          <Col md={6} lg={3} className="text-center mb-4">

            <div className="feature-box">

              <FaAward size={55} className="text-primary mb-3"/>

              <h5>Accurate Reports</h5>

              <p>
                Reliable results using modern laboratory equipment.
              </p>

            </div>

          </Col>

          <Col md={6} lg={3} className="text-center mb-4">

            <div className="feature-box">

              <FaHome size={55} className="text-danger mb-3"/>

              <h5>Home Collection</h5>

              <p>
                Convenient sample collection at your doorstep.
              </p>

            </div>

          </Col>

          <Col md={6} lg={3} className="text-center mb-4">

            <div className="feature-box">

              <FaClock size={55} className="text-warning mb-3"/>

              <h5>Fast Service</h5>

              <p>
                Quick report delivery with quality assurance.
              </p>

            </div>

          </Col>

        </Row>

      </Container>

    </section>
  );
}

export default WhyChooseUs;
