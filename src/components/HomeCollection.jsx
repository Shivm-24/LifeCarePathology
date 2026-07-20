import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHome, FaPhoneAlt, FaClock } from "react-icons/fa";
import CollectionPic from "../assets/images/HomeCollection.jpg";
import { openWhatsApp } from "../utils/whatsapp";

function HomeCollection() {
  return (
    <section className="home-collection py-5">
      <Container>
        <Row className="align-items-center">

          <Col lg={6}>
            <h2 className="fw-bold mb-4">
              Home Sample Collection
            </h2>

            <p className="text-muted">
              Can't visit the lab? No problem! Our trained professionals collect
              samples from your home safely and hygienically.
            </p>

            <div className="mt-4">

              <p>
                <FaHome className="text-success me-2"/>
                Doorstep Sample Collection
              </p>

              <p>
                <FaClock className="text-primary me-2"/>
                7:00 AM – 7:00 PM
              </p>

              <p>
                <FaPhoneAlt className="text-danger me-2"/>
                Call: +91 9129630100
              </p>

            </div>

            <Button variant="success" size="lg" onClick={() =>
  openWhatsApp(`Hello Life Care Pathology,

I would like to book a Home Sample Collection.

Please find my details below:

👤 Name:
📞 Mobile Number:
🏠 Address:
📍 Landmark:
📅 Preferred Date:
⏰ Preferred Time:
🩸 Required Test(s):

Please confirm my booking. Thank you!`)
}>
              Book Home Collection
            </Button>

          </Col>

          <Col lg={6}>
            <img
              src={CollectionPic}
              alt="Home Collection"
              className="img-fluid rounded shadow"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default HomeCollection;