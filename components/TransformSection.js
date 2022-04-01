import { Row, Container, Col } from "react-bootstrap";
import LearnButton from "./LearnButton";
import SideImage from "./SideImage";

export default function TransformSection() {
  return (
    <Row className="g-0">
      <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-around px-4 py-5  text-center text-md-start">
        <Container className="p-md-5">
          <h2 className="section-header my-3">Transform your brand</h2>
          <p className="section-paragraph">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <LearnButton underline="var(--Yellow)" />
        </Container>
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="">
        <SideImage desktop="url(/Desktop/image-transform.jpg)" mobile="url(/Mobile/image-transform.jpg)" />
      </Col>
    </Row>
  );
}
