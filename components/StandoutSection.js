import { Row, Container, Col } from "react-bootstrap";
import LearnButton from "./LearnButton";
import SideImage from "./SideImage";

export default function TransformSection() {
  return (
    <Row className="g-0">
      <Col xs={{ span: 12 }} md={{ span: 6 }} className="">
        <SideImage desktop="url(/Desktop/image-stand-out.jpg)" mobile="url(/Mobile/image-stand-out.jpg)" />
      </Col>
      <Col xs={{ span: 12 }} md={{ span: 6 }} className="d-flex flex-column justify-content-around px-4 py-5 text-center text-md-start">
        <Container className="p-md-5">
          <h2 className="section-header my-3">Stand out to the right audience</h2>
          <p className="section-paragraph">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <LearnButton underline="var(--Soft-red)" />
        </Container>
      </Col>
    </Row>
  );
}
