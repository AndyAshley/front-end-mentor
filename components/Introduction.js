import styles from "../components/css/introduction.module.css";
import classNames from "classnames";

export default function Introduction() {
  return (
    <div className={classNames(styles.IntroductionWrapper, "container-fluid text-center")}>
      <h2 className={classNames(styles.Title, "pt-5 mb-0")}>Designed for the future</h2>
      <div className="row flex-column flex-lg-row align-items-center position-relative">
        <div className={classNames(styles.DesktopImage, "col-12 col-lg-6 order-first order-lg-last px-0")}>
          <img src="/images/illustration-editor-mobile.svg" alt="editor Illustration" className="d-block d-lg-none img-fluid" />
          <img src="/images/illustration-editor-desktop.svg" alt="editor Illustration" className="d-none d-lg-block" />
        </div>
        <div className="col-12 col-lg-6 order-lg-first d-flex flex-column justify-content-center text-lg-start">
          <div className="container pt-3">
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
    </div>
  );
}
