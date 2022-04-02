import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";
import styles from "./css/TestimonialCard.module.css";
import classNames from "classnames";

export default function Testimonials() {
  const cardData = {
    emily: {
      image: "/image-emily.jpg",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      title: "Marketing Director",
    },

    thomas: {
      image: "/image-thomas.jpg",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    jennie: {
      image: "/image-jennie.jpg",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      title: "Business Owner",
    },
  };

  return (
    <Container fluid className="text-center my-3 my-md-5 py-5">
      <Container>
        <h2 className={classNames(styles.TestimonialHeader, "pt-md-2 pb-4 pb-md-5")}>CLIENT TESTIMONIALS</h2>
        <Row className="d-flex flex-column flex-md-row">
          <Col className="my-4 py-2">
            <TestimonialCard avatar={cardData.emily.image} text={cardData.emily.text} name={cardData.emily.name} title={cardData.emily.title} />
          </Col>
          <Col className="my-4 py-2">
            <TestimonialCard avatar={cardData.thomas.image} text={cardData.thomas.text} name={cardData.thomas.name} title={cardData.thomas.title} />
          </Col>
          <Col className="my-4 py-2">
            <TestimonialCard avatar={cardData.jennie.image} text={cardData.jennie.text} name={cardData.jennie.name} title={cardData.jennie.title} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
