import Button from "./Button";
import styles from "../components/css/header.module.css";
import classNames from "classnames";
import MainNavbar from "./Navbar";

export default function Header() {
  return (
    <div className={classNames(styles.HeaderWrapper, "container-fluid text-center px-0")} id="header">
      <MainNavbar />
      <h1 className="font-primary">A modern publishing platform</h1>
      <p className="mb-5">Grow your audience and build your online brand</p>

      <div className="d-lg-flex justify-content-center">
        <button className="button-main red-hover font-secondary mx-2 px-3">Start for Free</button>
        <button className="button-main white-hover font-secondary mx-2 px-4">Learn More</button>
      </div>
    </div>
  );
}
