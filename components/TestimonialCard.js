import { Container } from "react-bootstrap";
import classNames from "classnames";
import styles from "./css/TestimonialCard.module.css";

export default function TestimonialCard(props) {
  return (
    <Container className={classNames(styles.TestimonialCard, "px-0 d-flex flex-column align-items-center")}>
      <img src={props.image} alt="profile image" />
      <br />
      <p>{props.text}</p>
      <strong>{props.name}</strong>
      <small>{props.title}</small>
    </Container>
  );
}
