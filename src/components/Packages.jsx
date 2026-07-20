import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/Packages.css";
import { openWhatsApp } from "../utils/whatsapp"; 

const packages = [
  {
    name: "Basic Health Checkup",
    price: "₹499",
    tests: [
      "CBC",
      "Blood Sugar",
      "Urine Routine",
      "Hemoglobin"
    ]
  },
  {
    name: "Diabetes Package",
    price: "₹799",
    tests: [
      "Fasting Sugar",
      "PP Sugar",
      "HbA1c",
      "Urine Sugar"
    ]
  },
  {
    name: "Full Body Checkup",
    price: "₹1499",
    tests: [
      "CBC",
      "LFT",
      "KFT",
      "Lipid Profile",
      "Thyroid",
      "Blood Sugar"
    ]
  }
];

function Packages() {
  return (
    <section id="packages" className="py-5 bg-light">
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Health Packages</h2>
          <p className="text-muted">
            Affordable diagnostic packages for every family.
          </p>
        </div>

        <Row>
          {packages.map((pkg, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">

              <Card className="package-card h-100 shadow">

                <Card.Body>

                  <h4 className="text-success">
                    {pkg.name}
                  </h4>

                  <h2 className="my-3 text-primary">
                    {pkg.price}
                  </h2>

                  <ul>
                    {pkg.tests.map((test, i) => (
                      <li key={i}>{test}</li>
                    ))}
                  </ul>

                </Card.Body>

                <Card.Footer className="bg-white border-0">

                <Button variant="success" className="w-100" onClick={() =>
                 openWhatsApp(`Hello Life Care Pathology,
                    
                    I am interested in your ${pkg.name}.
                    
                    Please share more details about this package.
                    
                    My Details:
                    👤 Name:
                    📞 Mobile Number:
                    📅 Preferred Date:
                    
                    Thank you!`)
                 }
                >Book Package </Button>

                </Card.Footer>

              </Card>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Packages;