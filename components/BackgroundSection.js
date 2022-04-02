import styles from "./css/Sections.module.css";

export default function GraphicDesignSection() {
  return (
    <div className={styles.GridWrapper}>
      <div className={styles.GraphicDesignGrid}>
        <div></div>
        <div className={styles.text}>
          <h2>Graphic Design</h2>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
      </div>
      <div className={styles.PhotographyGrid}>
        <div></div>
        <div className={styles.text}>
          <h2>Photography</h2>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  );
}
