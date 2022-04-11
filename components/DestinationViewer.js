import data from "./Data/data.json";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ToggleButton from "./ToggleButton";
import styles from "../components/css/destinations.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  function setButton(callback) {
    callback;
    if (active === moon) {
      setMoonActive(true);
      setMarsActive(false);
      setEuropaActive(false);
      setTitanActive(false);
      return;
    }
    if (active === mars) {
      setMarsActive(true);
      setMoonActive(false);
      setEuropaActive(false);
      setTitanActive(false);
      return;
    }
    if (active === europa) {
      setEuropaActive(true);
      setMoonActive(false);
      setMarsActive(false);
      setTitanActive(false);
      return;
    }
    if (active === titan) {
      setTitanActive(true);
      setMoonActive(false);
      setMarsActive(false);
      setEuropaActive(false);
      return;
    }
  }

  return (
    <Container fluid className={styles.DestinationWrapper}>
      <h1 className="text-center text-md-start pt-5 pt-xxl-0">
        <span>01</span>Pick your destination
      </h1>
      <Row className="flex-column flex-xxl-row justify-content-center align-items-center g-0">
        <Col xxl={5} className={classNames(styles.ImageWrapper, "text-light text-center px-0")}>
          <Swiper className="destination-swiper mb-3 mb-xxl-0">
            <SwiperSlide>{({ isActive }) => <img src={moon.images.webp} alt={"Image of " + active.name} className="mt-4 mt-xxl-0" {...(isActive ? (setActive(moon), setMoonActive(true)) : setMoonActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={mars.images.webp} alt={"Image of " + active.name} className="mt-4 mt-xxl-0" {...(isActive ? (setActive(mars), setMarsActive(true)) : setMarsActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={europa.images.webp} alt={"Image of " + active.name} className="mt-4 mt-xxl-0" {...(isActive ? (setActive(europa), setEuropaActive(true)) : setEuropaActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={titan.images.webp} alt={"Image of " + active.name} className="mt-4 mt-xxl-0" {...(isActive ? (setActive(titan), setTitanActive(true)) : setTitanActive(false))} />}</SwiperSlide>
          </Swiper>
        </Col>
        <Col xxl={7} className={classNames(styles.TextColumn, "text-light text-center align-self-start")}>
          <div className={classNames(styles.ButtonWrapper, "text-center text-xxl-start")}>
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(0, 800);
                setButton(setActive(moon));
              }}
              btnText="MOON"
              style={{ borderBottom: moonActive === true ? "2px solid white" : "transparent", color: moonActive === true ? "white" : "var(--space-blue)" }}
              label={"Select " + moon.name}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(1, 800);
                setButton(setActive(mars));
              }}
              btnText="MARS"
              style={{ borderBottom: marsActive === true ? "2px solid white" : "transparent", color: marsActive === true ? "white" : "var(--space-blue)" }}
              label={"Select " + mars.name}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(2, 800);
                setButton(setActive(europa));
              }}
              btnText="EUROPA"
              style={{ borderBottom: europaActive === true ? "2px solid white" : "transparent", color: europaActive === true ? "white" : "var(--space-blue)" }}
              label={"Select " + europa.name}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(3, 800);
                setButton(setActive(titan));
              }}
              btnText="TITAN"
              style={{ borderBottom: titanActive === true ? "2px solid white" : "transparent", color: titanActive === true ? "white" : "var(--space-blue)" }}
              label={"Select " + titan.name}
            />
          </div>
          <h2>{active.name}</h2>
          <p className={styles.LocationDescription}>{active.description}</p>
          <div className={classNames(styles.DestinationData, "d-flex flex-column flex-md-row justify-content-evenly")}>
            <div className={classNames(styles.DataFooter, "px-4 px-md-0 mt-4 mt-md-2")}>
              <p className="mb-0">Avg. distance</p>
              <span>{active.distance}</span>
            </div>
            <div className={classNames(styles.DataFooter, "px-4 px-md-0 mt-4 mt-md-2")}>
              <p className="mb-0">Est. travel time</p>
              <span>{active.travel}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
