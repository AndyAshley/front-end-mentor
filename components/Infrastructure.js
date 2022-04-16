import styles from "../components/css/infrastructure.module.css";
import classNames from "classnames";

export default function Infrastructure() {
  return (
    <div className={classNames(styles.RelativeWrapper, "container-fluid px-0")}>
      <div className={classNames(styles.InfrastructureWrapper, " d-flex flex-column justify-content-center")}>
        <img src="images/bg-pattern-circles.svg" alt="Illustration of Mobile Phones" width="600px" />
        <div className="row">
          <div className="col-12 col-lg-6"></div>
          <div className="col-12 col-lg-6">
            <h2>State of the Art Infrastructure</h2>
            <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>{" "}
          </div>
        </div>
      </div>
      <img src="images/illustration-phones.svg" alt="Illustration of Mobile Phones" className="img-fluid" />
    </div>
  );
}
