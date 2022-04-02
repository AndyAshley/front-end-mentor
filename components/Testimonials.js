import { Container, Row, Col } from "react-bootstrap";
import { cardData } from "Constants/Constants";
import TestimonialCard from "./TestimonialCard";
import styles from "./css/TestimonialCard.module.css";
import classNames from "classnames";

export default function Testimonials() {
  return (
    <Container fluid className="text-center my-3 my-md-5 py-5">
      <Container>
        <h2 className={classNames(styles.TestimonialHeader, "pt-md-2 pb-4 pb-md-5")}>CLIENT TESTIMONIALS</h2>
        <Row className="d-flex flex-column flex-md-row">
          {cardData.map((item, key) => {
            return (
              <Col lg={{ span: 4 }} className="my-4 py-2" key={`id-${key}`} id={`testimonial-${key}`}>
                <TestimonialCard image={item.image} text={item.text} name={item.name} title={item.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}
