import { Container, Row, Col } from "react-bootstrap";

export default function Gallery() {
  return (
    <Container fluid className="px-0">
      <Row className="g-0">
        <Col lg={{ span: 6 }} className="d-flex flex-row">
          <div>
            <img src="/Mobile/image-gallery-milkbottles.jpg" alt="picture of milk bottles" className="img-fluid d-block d-md-none" />
            <img src="/Desktop/image-gallery-milkbottles.jpg" alt="picture of milk bottles" className="img-fluid d-none d-md-block" />
          </div>
          <div>
            <img src="/Mobile/image-gallery-orange.jpg" alt="picture of milk bottles" className="img-fluid d-block d-md-none" />
            <img src="/Desktop/image-gallery-orange.jpg" alt="picture of milk bottles" className="img-fluid d-none d-md-block" />
          </div>
        </Col>
        <Col lg={{ span: 6 }} className="d-flex flex-row">
          <div>
            <img src="/Mobile/image-gallery-cone.jpg" alt="picture of milk bottles" className="img-fluid d-block d-md-none" />
            <img src="/Desktop/image-gallery-cone.jpg" alt="picture of milk bottles" className="img-fluid d-none d-md-block" />
          </div>
          <div>
            <img src="/Mobile/image-gallery-sugar-cubes.jpg" alt="picture of milk bottles" className="img-fluid d-block d-md-none" />
            <img src="/Desktop/image-gallery-sugarcubes.jpg" alt="picture of milk bottles" className="img-fluid d-none d-md-block" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
