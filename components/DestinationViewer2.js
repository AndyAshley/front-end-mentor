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

  return (
    <Container fluid className={styles.DestinationWrapper}>
      <h1 className="text-center text-md-start pt-5">
        <span>01</span>Pick your destination
      </h1>
      <Row className="flex-column flex-lg-row juistify-content- align-items-center w-100">
        <Col lg={6} className={classNames(styles.ImageWrapper, "text-light text-center px-0")}>
          <Swiper className="crewSwiper mb-3 mb-lg-0">
            <SwiperSlide>{({ isActive }) => <img src={moon.images.webp} alt={"Image of " + active.name} className="mt-4 mt-lg-0" {...(isActive ? (setActive(moon), setMoonActive(true)) : setMoonActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={mars.images.webp} alt={"Image of " + active.name} className="mt-4 mt-lg-0" {...(isActive ? (setActive(mars), setMarsActive(true)) : setMarsActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={europa.images.webp} alt={"Image of " + active.name} className="mt-4 mt-lg-0" {...(isActive ? (setActive(europa), setEuropaActive(true)) : setEuropaActive(false))} />}</SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={titan.images.webp} alt={"Image of " + active.name} className="mt-4 mt-lg-0" {...(isActive ? (setActive(titan), setTitanActive(true)) : setTitanActive(false))} />}</SwiperSlide>
          </Swiper>
        </Col>
        <Col lg={6} className="text-light text-center">
          <div className={classNames(styles.ButtonWrapper, "text-center")}>
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(0, 800);
                setActive(moon);
                setMoonActive(true);
                setMarsActive(false);
                setEuropaActive(false);
                setTitanActive(false);
              }}
              btnText="MOON"
              style={{ borderBottom: moonActive === true ? "2px solid white" : "transparent", color: moonActive === true ? "white" : "var(--space-blue)" }}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(1, 800);
                setActive(mars);
                setMarsActive(true);
                setMoonActive(false);
                setEuropaActive(false);
                setTitanActive(false);
              }}
              btnText="MARS"
              style={{ borderBottom: marsActive === true ? "2px solid white" : "transparent", color: marsActive === true ? "white" : "var(--space-blue)" }}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(2, 800);
                setActive(europa);
                setEuropaActive(true);
                setMoonActive(false);
                setMarsActive(false);
                setTitanActive(false);
              }}
              btnText="EUROPA"
              style={{ borderBottom: europaActive === true ? "2px solid white" : "transparent", color: europaActive === true ? "white" : "var(--space-blue)" }}
            />
            <ToggleButton
              setActive={(e) => {
                document.querySelector(".swiper").swiper.slideTo(3, 800);
                setActive(titan);
                setTitanActive(true);
                setMoonActive(false);
                setMarsActive(false);
                setEuropaActive(false);
              }}
              btnText="TITAN"
              style={{ borderBottom: titanActive === true ? "2px solid white" : "transparent", color: titanActive === true ? "white" : "var(--space-blue)" }}
            />
          </div>
          <h2>{active.name}</h2>
          <p className={styles.LocationDescription}>{active.description}</p>
          <div className={classNames(styles.DestinationData, "d-flex flex-column flex-md-row justify-content-center")}>
            <div className="px-4 px-md-0 mt-4 mt-md-2">
              <p className="mb-0">Avg. distance</p>
              <span>{active.distance}</span>
            </div>
            <div className="px-4 px-md-0 mt-4 mt-md-2">
              <p className="mb-0">Est. travel time</p>
              <span>{active.travel}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
