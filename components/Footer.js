import { Container } from "react-bootstrap";
import classNames from "classnames";
import styles from "./css/Footer.module.css";
import { sunnysideLogo, iconFacebook, iconInstagram, iconTwitter, iconPinterest } from "Constants/Constants";

export default function Footer() {
  return (
    <Container fluid className={classNames(styles.Footer, "px-0 py-5")}>
      <Container className={styles.FooterWrapper}>
        <div className="text-center mb-5" id="logo">
          {sunnysideLogo}
        </div>
        <div className="d-flex justify-content-between w-100 px-4">
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
        <div className={classNames(styles.Socials, "d-flex justify-content-around text-center w-75 px-5 mt-auto")}>
          {iconFacebook} {iconInstagram} {iconTwitter} {iconPinterest}
        </div>
      </Container>
    </Container>
  );
}
