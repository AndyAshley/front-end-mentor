import Button from "./Button";
import styles from "../components/css/header.module.css";
import classNames from "classnames";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className={classNames(styles.HeaderWrapper, "container-fluid text-center px-0")} id="header">
      <Navbar />
      <h1 className="font-primary">A modern publishing platform</h1>
      <p className="mb-5">Grow your audience and build your online brand</p>
      <div className="d-flex justify-content-center px-4">
        <div className="d-lg-flex justify-content-even">
          <button className="button-main red-hover font-secondary mx-2">Start for Free</button>
          <button className="button-main white-hover font-secondary mx-2">Learn More</button>
        </div>
      </div>
    </div>
  );
}
