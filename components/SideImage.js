import styles from "../components/css/SideImage.module.css";
import classNames from "classnames";

export default function SideImage(props) {
  return (
    <>
      <div className={classNames(styles.Background, "d-none d-md-block")} style={{ backgroundImage: props.desktop }}></div>
      <div className={classNames(styles.Background, "d-block d-md-none")} style={{ backgroundImage: props.mobile }}></div>
    </>
  );
}
