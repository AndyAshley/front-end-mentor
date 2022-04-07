import data from "./Data/data.json";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PaginationButton from "./PaginationButton";
import styles from "../components/css/crew.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

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

  // const slide = document.querySelector(".swiper").swiper;

  return (
    <Container fluid className={styles.CrewWrapper}>
      <Row className="d-flex flex-column flex-lg-row juistify-content-center align-items-center">
        <h1 className="text-center text-lg-left pt-5">
          <span>02</span>Meet Your Crew
        </h1>
        <Col className={styles.ImageWrapper}>
          <Swiper className="mySwiper" id="crewSwipe" mousewheel={true}>
            <SwiperSlide>
              {({ isActive }) => <img src={douglas.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(douglas), setDouglasActive(true)) : setDouglasActive(false))} />}
            </SwiperSlide>
            <SwiperSlide>{({ isActive }) => <img src={mark.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(mark), setMarkActive(true)) : setMarkActive(false))} />}</SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <img src={victor.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(victor), setVictorActive(true)) : setVictorActive(false))} />}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => <img src={anousheh.images.webp} alt={"Image of " + active.name} className="mt-4" height="222px" width="auto" {...(isActive ? (setActive(anousheh), setAnoushehActive(true)) : setAnoushehActive(false))} />}
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col className="text-center">
          <PaginationButton
            setActive={() => {
              document.querySelector(".swiper").swiper.slideTo(0, 800);
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
              document.querySelector(".swiper").swiper.slideTo(1, 800);
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
              document.querySelector(".swiper").swiper.slideTo(2, 800);
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
              document.querySelector(".swiper").swiper.slideTo(3, 800);
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
