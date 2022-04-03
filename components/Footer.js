import { Container } from "react-bootstrap";
import classNames from "classnames";
import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons";
import HoverScale from "./spring/HoverScale";

export default function Footer() {
  return (
    <Container fluid className={classNames(styles.Footer, "px-0 py-5")}>
      <Container className={styles.FooterWrapper}>
        <div className="text-center mb-4 mt-2" id="logo">
          {/* {sunnysideLogo} */}
          <img src="/logo-dark.svg" alt="sunnyside logo footer" style={{ width: "175px", opacity: "0.8" }} />
        </div>
        <div className="d-flex justify-content-between w-100 px-4 mt-3">
          <a href="#" target="_blank" rel="noopener noreferrer">
            About
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Services
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Projects
          </a>
        </div>
        <div className={classNames(styles.Socials, "d-flex justify-content-evenly text-center w-100 px-5 mt-auto")}>
          <HoverScale scale={1.2} html={<FontAwesomeIcon icon={faFacebookSquare} />} />
          <HoverScale scale={1.2} html={<FontAwesomeIcon icon={faInstagram} />} />
          <HoverScale scale={1.2} html={<FontAwesomeIcon icon={faTwitter} />} />
          <HoverScale scale={1.2} html={<FontAwesomeIcon icon={faPinterest} />} />
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.frontendmentor.io/profile/AndyAshley">Andy</a>.
        </div>
      </Container>
    </Container>
  );
}
