import LearnButton from "./LearnButton";
import SideImage from "./SideImage";
import styles from "./css/Sections.module.css";
import classNames from "classnames";

export default function TransformSection() {
  return (
    <div className={styles.grid}>
      <div className={classNames(styles.text, styles.Reverse)}>
        <h2>Transform your brand</h2>
        <p className="section-paragraph">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <LearnButton underline="var(--Yellow)" />
      </div>
      <div className={styles.image}>
        <SideImage desktop="url(/Desktop/image-transform.jpg)" mobile="url(/Mobile/image-transform.jpg)" />
      </div>
    </div>
  );
}
