import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTint, FaVial, FaHeartbeat, FaMicroscope, FaFlask, FaNotesMedical, } from "react-icons/fa";
import "../assets/css/Services.css";

const services = [
  {
    icon: <FaTint size={45} className="text-danger" />,
    title: "Blood Test",
    desc: "Complete blood investigations with accurate reporting.",
  },
  {
    icon: <FaVial size={45} className="text-primary" />,
    title: "Urine Test",
    desc: "Routine and specialized urine examination.",
  },
  {
    icon: <FaHeartbeat size={45} className="text-success" />,
    title: "Diabetes Test",
    desc: "Fasting, PP, HbA1c and diabetic profile.",
  },
  {
    icon: <FaMicroscope size={45} className="text-warning" />,
    title: "CBC",
    desc: "Complete Blood Count with computerized analysis.",
  },
  {
    icon: <FaFlask size={45} className="text-info" />,
    title: "Thyroid Profile",
    desc: "T3, T4 & TSH testing.",
  },
  {
    icon: <FaNotesMedical size={45} className="text-success" />,
    title: "Health Packages",
    desc: "Affordable full body checkup packages.",
  },
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            Accurate • Affordable • Trusted Diagnostic Services
          </p>
        </div>

        <Row>

          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>

              <Card className="service-card h-100 text-center shadow-sm">

                <Card.Body>

                  <div className="mb-3">
                    {service.icon}
                  </div>

                  <h5>{service.title}</h5>

                  <p className="text-muted">
                    {service.desc}
                  </p>

                </Card.Body>

              </Card>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default Services;