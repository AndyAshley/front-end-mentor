import styles from "@components/css/Footer.module.css";
import classNames from "classnames";

export default function Footer() {

  return (
    <>
      <footer className={classNames(styles.FooterWrapper, "py-5")}>
        <div className={classNames(styles.Footer, "d-flex flex-column flex-md-row justify-content-around")}>
          <img src="/images/logo.svg" alt="blogr Logo" className="align-self-center align-self-md-start" />
          <div className="pt-5 pt-md-0 align-self-md-start">
            <span>Product</span>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="py-5 py-md-0 align-self-md-start">
            <span>Company</span>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <span className="align-self-md-start">Connect</span>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
