import { Container } from "react-bootstrap";
import styles from "./css/SiteHeader.module.css";
import classNames from "classnames";
import TopNav from "./TopNav";

export default function SiteHeader() {
  return (
    <Container fluid className={classNames(styles.HeaderWrapper, "px-0")}>
      <TopNav />
      <Container className="d-flex flex-column align-items-center pt-5 mt-5 px-0">
        <h1>WE ARE CREATIVES</h1>
        <img src="/icon-arrow-down.svg" aria-hidden="true" className={classNames(styles.ArrowDown, "my-5")} />
      </Container>
    </Container>
  );
}
