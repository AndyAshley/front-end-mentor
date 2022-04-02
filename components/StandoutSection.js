import LearnButton from "./LearnButton";
import SideImage from "./SideImage";
import styles from "./css/Sections.module.css";

export default function TransformSection() {
  return (
    <div className={styles.grid}>
      <div className={styles.image}>
        <SideImage desktop="url(/Desktop/image-stand-out.jpg)" mobile="url(/Mobile/image-stand-out.jpg)" />
      </div>
      <div className={styles.text}>
        <h2>Stand out to the right audience</h2>
        <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
        <LearnButton underline="var(--Soft-red)" />
      </div>
    </div>
  );
}
