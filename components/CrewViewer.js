import data from "./Data/data.json";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PaginationButton from "./PaginationButton";
import styles from "../components/css/crew.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classNames from "classnames";

export default function CrewViewer() {
  const douglas = data.crew[0];
  const mark = data.crew[1];
  const victor = data.crew[2];
  const anousheh = data.crew[3];

  const [active, setActive] = useState({});
  const [douglasActive, setDouglasActive] = useState();
  const [markActive, setMarkActive] = useState(false);
  const [victorActive, setVictorActive] = useState(false);
  const [anoushehActive, setAnoushehActive] = useState(false);

  function setButton(callback) {
    callback;
    if (active === douglas) {
      setDouglasActive(true);
      setMarkActive(false);
      setVictorActive(false);
      setAnoushehActive(false);
      return;
    }
    if (active === mark) {
      setMarkActive(true);
      setDouglasActive(false);
      setVictorActive(false);
      setAnoushehActive(false);
      return;
    }
    if (active === victor) {
      setVictorActive(true);
      setDouglasActive(false);
      setMarkActive(false);
      setAnoushehActive(false);
      return;
    }
    if (active === anousheh) {
      setAnoushehActive(true);
      setDouglasActive(false);
      setMarkActive(false);
      setVictorActive(false);
      return;
    }
  }

  return (
    <Container fluid className={classNames(styles.CrewWrapper, "px-0")}>
      <h1 className="text-center text-md-start d-block d-xxl-none">
        <span>02</span>Meet Your Crew
      </h1>
      <Row className="flex-column flex-xxl-row justify-content-center align-items-center px-0 g-0">
        <Col xxl={{ span: 6, order: 2 }} md={{ order: "last" }} xs={{ order: `first` }} className={styles.ImageWrapper}>
          <Swiper className="crewSwiper">
            <SwiperSlide className="douglas-bg">
              {({ isActive }) => {
                isActive ? (setActive(douglas), setDouglasActive(true)) : setDouglasActive(false);
              }}
            </SwiperSlide>
            <SwiperSlide className="mark-bg">
              {({ isActive }) => {
                isActive ? (setActive(mark), setMarkActive(true)) : setMarkActive(false);
              }}
            </SwiperSlide>
            <SwiperSlide className="victor-bg">
              {({ isActive }) => {
                isActive ? (setActive(victor), setVictorActive(true)) : setVictorActive(false);
              }}
            </SwiperSlide>
            <SwiperSlide className=" anousheh-bg">
              {({ isActive }) => {
                isActive ? (setActive(anousheh), setAnoushehActive(true)) : setAnoushehActive(false);
              }}
            </SwiperSlide>
          </Swiper>
        </Col>

        <Col xxl={{ span: 6, order: 1 }} className="d-flex flex-column justify-content-between">
          <h1 className="text-center text-md-start pt-5 pt-xxl-0 d-none d-xxl-block">
            <span>02</span>Meet Your Crew
          </h1>
          <Row className="flex-column g-0 px-0" id="text-row">
            <Col md={{ order: 2 }} className={classNames(styles.ButtonWrapper, "text-center text-xxl-start")}>
              <PaginationButton
                setActive={() => {
                  document.querySelector(".swiper").swiper.slideTo(0, 800);
                  setButton(setActive(douglas));
                }}
                style={{ opacity: douglasActive === true ? "1" : "0.17" }}
                label={"Select " + douglas.name}
              />
              <PaginationButton
                setActive={() => {
                  document.querySelector(".swiper").swiper.slideTo(1, 800);
                  setButton(setActive(mark));
                }}
                style={{ opacity: markActive === true ? "1" : "0.17" }}
                label={"Select " + mark.name}
              />
              <PaginationButton
                setActive={() => {
                  document.querySelector(".swiper").swiper.slideTo(2, 800);
                  setButton(setActive(victor));
                }}
                style={{ opacity: victorActive === true ? "1" : "0.17" }}
                label={"Select " + victor.name}
              />
              <PaginationButton
                setActive={() => {
                  document.querySelector(".swiper").swiper.slideTo(3, 800);
                  setButton(setActive(anousheh));
                }}
                style={{ opacity: anoushehActive === true ? "1" : "0.17" }}
                label={"Select " + anousheh.name}
              />
            </Col>
            <Col md={{ order: 1 }} xs={{ order: "last" }} className={styles.CrewData}>
              <span>{active.role}</span>
              <h2>{active.name}</h2>
              <p>{active.bio}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
