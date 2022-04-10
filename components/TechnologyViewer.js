import data from "./Data/data.json";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NumberedButton from "./NumberedButton";
import styles from "../components/css/technologyviewer.module.css";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TechnologyViewer() {
  const launch = data.technology[0];
  const port = data.technology[1];
  const capsule = data.technology[2];

  const [active, setActive] = useState(launch);
  const [launchActive, setLaunchActive] = useState(true);
  const [portActive, setPortActive] = useState(false);
  const [capsuleActive, setCapsuleActive] = useState(false);

  return (
    <Container fluid className={styles.TechWrapper}>
      <h1 className="text-center text-md-start pt-5">
        <span>03</span>Space Launch 101
      </h1>
      <Row className="d-flex flex-column flex-xxl-row justify-content-center align-items-center mx-0">
        <Col xxl={{ span: 5, order: 3 }} className={styles.ImageWrapper}>
          <Swiper className="technology-swiper">
            <SwiperSlide className="launch-bg">
              {({ isActive }) => {
                isActive ? (setActive(launch), setLaunchActive(true)) : setLaunchActive(false);
              }}
            </SwiperSlide>
            <SwiperSlide className="port-bg">
              {({ isActive }) => {
                isActive ? (setActive(port), setPortActive(true)) : setPortActive(false);
              }}
            </SwiperSlide>
            <SwiperSlide className="capsule-bg">
              {({ isActive }) => {
                isActive ? (setActive(capsule), setCapsuleActive(true)) : setCapsuleActive(false);
              }}
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col xxl={{ span: 2, order: 1 }} className="text-center d-xxl-flex flex-column align-items-center">
          <NumberedButton
            setActive={() => {
              document.querySelector(".swiper").swiper.slideTo(0, 800);
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
              document.querySelector(".swiper").swiper.slideTo(1, 800);
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
              document.querySelector(".swiper").swiper.slideTo(2, 800);
              setActive(capsule);
              setCapsuleActive(true);
              setLaunchActive(false);
              setPortActive(false);
            }}
            style={{ backgroundColor: capsuleActive === true ? "white" : "transparent", borderColor: capsuleActive === true ? "white" : "#42444b", color: capsuleActive === true ? "var(--space-dark)" : "white" }}
            btnText="3"
          />
        </Col>
        <Col xl={{ span: 5, order: 2 }} className={styles.TechData}>
          <span>The Terminology...</span>
          <h2>{active.name}</h2>
          <p>{active.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
