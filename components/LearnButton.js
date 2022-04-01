import classNames from "classnames";
import styles from "../components/css/LearnButton.module.css";

export default function LearnButton(props) {
  return (
    <div role="button">
      <strong className="position-relative" style={{ fontFamily: "Fraunces", fontWeight: "900" }}>
        LEARN MORE
        <span className={classNames(styles.LearnSpan, "position-absolute opacity-25")} style={{ background: props.underline, width: "115%", borderRadius: "10px", zIndex: "-1" }}></span>
      </strong>
    </div>
  );
}
