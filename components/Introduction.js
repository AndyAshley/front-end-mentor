import styles from "../components/css/introduction.module.css";
import classNames from "classnames";

export default function Introduction() {
  return (
    <>
      <h2 className={classNames(styles.Title)}>Designed for the future</h2>
      <div className={styles.IntroductionWrapper}>
        <div className={styles.TextWrapper}>
          <div className={styles.TextContainer}>
            <div className="container">
              <h2 className={styles.SubTitle}>Introducing an extensible editor</h2>
              <p>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
            <div className="container">
              <h2 className={classNames(styles.SubTitle, "pt-4")}>Robust content management</h2>
              <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
          </div>
        </div>
        <div className={styles.ImageWrapper}>
          <div className={styles.ImageContainer}>
            <img src="/images/illustration-editor-mobile.svg" alt="editor Illustration" className="d-block d-lg-none" />
            <img src="/images/illustration-editor-desktop.svg" alt="editor Illustration" className="d-none d-lg-block" />
          </div>
        </div>
      </div>
    </>
  );
}
