import data from "./Data/data.json";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NumberedButton from "./NumberedButton";
import styles from "../components/css/technologyviewer.module.css";
import classNames from "classnames";

export default function TechnologyViewer() {
  const launch = data.technology[0];
  const port = data.technology[1];
  const capsule = data.technology[2];

  const [active, setActive] = useState(launch);
  const [launchActive, setLaunchActive] = useState(true);
  const [portActive, setPortActive] = useState(false);
  const [capsuleActive, setCapsuleActive] = useState(false);

  return (
    <Container fluid className={styles.CrewWrapper}>
      <Row className="d-flex flex-column flex-lg-row juistify-content-center align-items-center mx-0">
        <h1 className="text-center text-lg-left pt-5">
          <span>03</span>Space Launch 101
        </h1>
        <Col className={styles.ImageWrapper}>
          <img src={active.images.landscape} alt={active.name + " image"} className="mt-4 img-fluid" />
        </Col>
        <Col className="text-center">
          <NumberedButton
            setActive={() => {
              setActive(launch);
              setLaunchActive(true);
              setPortActive(false);
              setCapsuleActive(false);
            }}
            style={{ backgroundColor: launchActive === true ? "white" : "transparent", borderColor: launchActive === true ? "white" : "#42444b", color: launchActive === true ? "var(--space-dark)" : "white" }}
            btnText="1"
          />
          <NumberedButton
            setActive={() => {
              setActive(port);
              setPortActive(true);
              setLaunchActive(false);
              setCapsuleActive(false);
            }}
            style={{ backgroundColor: portActive === true ? "white" : "transparent", borderColor: portActive === true ? "white" : "#42444b", color: portActive === true ? "var(--space-dark)" : "white" }}
            btnText="2"
          />
          <NumberedButton
            setActive={() => {
              setActive(capsule);
              setCapsuleActive(true);
              setLaunchActive(false);
              setPortActive(false);
            }}
            style={{ backgroundColor: capsuleActive === true ? "white" : "transparent", borderColor: capsuleActive === true ? "white" : "#42444b", color: capsuleActive === true ? "var(--space-dark)" : "white" }}
            btnText="3"
          />
        </Col>
        <Col className={styles.CrewData}>
          <span>The Terminology...</span>
          <h2>{active.name}</h2>
          <p>{active.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
