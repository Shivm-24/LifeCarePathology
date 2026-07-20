import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../assets/css/AppointmentForm.css";
import { openWhatsApp } from "../utils/whatsapp";

function AppointmentForm() {
  return (
    <section id="appointment" className="py-5">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Book an Appointment</h2>
          <p className="text-muted">
            Fill out the form below and we'll contact you shortly.
          </p>
        </div>

        <Row className="justify-content-center">

          <Col lg={8}>

            <Card className="shadow border-0 rounded-4">

              <Card.Body className="p-4">

                <Form>

                  <Row>

                    <Col md={6} className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter mobile number"
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Age"
                      />
                    </Col>

                    <Col md={6} className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Form.Select>
                    </Col>

                    <Col md={12} className="mb-3">
                      <Form.Label>Test Required</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Example: CBC, Thyroid, Sugar Test"
                      />
                    </Col>

                    <Col md={12} className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your address"
                      />
                    </Col>

                  </Row>

                  <Button
                    variant="success" size="lg" className="w-100" onClick={() =>openWhatsApp(message)}
                  >
                    Book Appointment
                  </Button>

                </Form>

              </Card.Body>

            </Card>

          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default AppointmentForm;