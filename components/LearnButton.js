import classNames from "classnames";
import styles from "../components/css/LearnButton.module.css";
import HoverScale from "./spring/HoverScale";

export default function LearnButton(props) {
  return (
    <HoverScale
      scale={1.05}
      html={
        <div role="button" className={styles.ButtonContainer}>
          <strong className="position-relative" style={{ fontFamily: "Fraunces", fontWeight: "900", zIndex: "2" }}>
            <a href="#" rel="noopener noreferrer" title="Learn More" aria-label="Click to learn more">
              LEARN MORE
            </a>
            <span className={classNames(styles.LearnSpan, "position-absolute")} style={{ background: props.underline, width: "115%", borderRadius: "10px", zIndex: "-1" }}></span>
          </strong>
        </div>
      }
    />
  );
}
