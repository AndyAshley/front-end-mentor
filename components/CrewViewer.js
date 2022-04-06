import data from "./Data/data.json";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PaginationButton from "./PaginationButton";
import styles from "../components/css/crew.module.css";
import classNames from "classnames";

export default function CrewViewer() {
  const douglas = data.crew[0];
  const mark = data.crew[1];
  const victor = data.crew[2];
  const anousheh = data.crew[3];

  const [active, setActive] = useState(douglas);
  const [douglasActive, setDouglasActive] = useState(true);
  const [markActive, setMarkActive] = useState(false);
  const [victorActive, setVictorActive] = useState(false);
  const [anoushehActive, setAnoushehActive] = useState(false);

  return (
    <Container fluid className={styles.CrewWrapper}>
      <Row className="d-flex flex-column flex-lg-row juistify-content-center align-items-center">
        <h1 className="text-center text-lg-left pt-5">
          <span>02</span>Meet Your Crew
        </h1>
        <Col className={styles.ImageWrapper}>
          <img src={active.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" />
        </Col>
        <Col className="text-center">
          <PaginationButton
            setActive={() => {
              setActive(douglas);
              setDouglasActive(true);
              setMarkActive(false);
              setVictorActive(false);
              setAnoushehActive(false);
            }}
            style={{ opacity: douglasActive === true ? "1" : "0.17" }}
          />
          <PaginationButton
            setActive={() => {
              setActive(mark);
              setMarkActive(true);
              setDouglasActive(false);
              setVictorActive(false);
              setAnoushehActive(false);
            }}
            style={{ opacity: markActive === true ? "1" : "0.17" }}
          />
          <PaginationButton
            setActive={() => {
              setActive(victor);
              setVictorActive(true);
              setDouglasActive(false);
              setMarkActive(false);
              setAnoushehActive(false);
            }}
            style={{ opacity: victorActive === true ? "1" : "0.17" }}
          />
          <PaginationButton
            setActive={() => {
              setActive(anousheh);
              setAnoushehActive(true);
              setDouglasActive(false);
              setMarkActive(false);
              setVictorActive(false);
            }}
            style={{ opacity: anoushehActive === true ? "1" : "0.17" }}
          />
        </Col>
        <Col className={styles.CrewData}>
          <span>{active.role}</span>
          <h2>{active.name}</h2>
          <p>{active.bio}</p>
        </Col>
      </Row>
    </Container>
  );
}
