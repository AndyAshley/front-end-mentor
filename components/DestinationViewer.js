import data from "./Data/data.json";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ToggleButton from "./ToggleButton";
import styles from "../components/css/destinations.module.css";
import classNames from "classnames";

export default function DestinationViewer() {
  const moon = data.destinations[0];
  const mars = data.destinations[1];
  const europa = data.destinations[2];
  const titan = data.destinations[3];

  const [active, setActive] = useState(moon);
  const [moonActive, setMoonActive] = useState(true);
  const [marsActive, setMarsActive] = useState(false);
  const [europaActive, setEuropaActive] = useState(false);
  const [titanActive, setTitanActive] = useState(false);

  return (
    <Container fluid className={styles.DestinationWrapper}>
      <Row className="d-flex flex-column flex-lg-row juistify-content-center align-items-center">
        <Col className="text-light text-center">
          <h1 className="text-center text-lg-left pt-5">
            <span>01</span>Pick your destination
          </h1>
          <img src={active.images.webp} alt={"Image of " + active.name} className="my-4" height="170px" width="170px" />
        </Col>
        <Col className="text-light text-center">
          <div className="text-center">
            <ToggleButton
              setActive={(e) => {
                setActive(moon);
                setMoonActive(true);
                setMarsActive(false);
                setEuropaActive(false);
                setTitanActive(false);
              }}
              btnText="Moon"
              style={{ borderBottom: moonActive === true ? "2px solid white" : "transparent" }}
            />
            <ToggleButton
              setActive={(e) => {
                setActive(mars);
                setMarsActive(true);
                setMoonActive(false);
                setEuropaActive(false);
                setTitanActive(false);
              }}
              btnText="Mars"
              style={{ borderBottom: marsActive === true ? "2px solid white" : "transparent" }}
            />
            <ToggleButton
              setActive={(e) => {
                setActive(europa);
                setEuropaActive(true);
                setMoonActive(false);
                setMarsActive(false);
                setTitanActive(false);
              }}
              btnText="Europa"
              style={{ borderBottom: europaActive === true ? "2px solid white" : "transparent" }}
            />
            <ToggleButton
              setActive={(e) => {
                setActive(titan);
                setTitanActive(true);
                setMoonActive(false);
                setMarsActive(false);
                setEuropaActive(false);
              }}
              btnText="Titan"
              style={{ borderBottom: titanActive === true ? "2px solid white" : "transparent" }}
            />
          </div>
          <h2>{active.name}</h2>
          <p className={styles.LocationDescription}>{active.description}</p>
          <div className={classNames(styles.DestinationData, "d-flex flex-column flex-md-row h-100")}>
            <div className="px-4 mt-4">
              <p className="mb-0">Avg. distance</p>
              <span>{active.distance}</span>
            </div>
            <div className="px-4 mt-4">
              <p className="mb-0">Est. travel time</p>
              <span>{active.travel}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
