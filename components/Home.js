import { Container, Row, Col } from "react-bootstrap";
import styles from "../components/css/home.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function Home() {
  return (
    <Container className={classNames(styles.HomeWrapper, "pt-5 h-100")}>
      <Row className="flex-column flex-xxl-row align-items-end align-items-xxl-end px-3 py-3 text-light h-100">
        <Col className={classNames(styles.HomeText, "d-flex flex-column align-items-center align-items-xxl-start ps-xxl-5 text-center text-xxl-start pt-md-3")}>
          <h1 className="ps-xxl-4">SO, YOU WANT TO TRAVEL TO</h1>
          <span>SPACE</span>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </Col>
        <Col className={classNames(styles.ExploreWrapper, "justify-self-xxl-end")}>
          <Link href="/destinations">
            <a>
              <div className={styles.Explore}>
                <span>EXPLORE</span>
              </div>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
