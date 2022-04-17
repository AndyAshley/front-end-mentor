import styles from "../components/css/powerful.module.css";
import classNames from "classnames";

export default function Introduction() {
  return (
    //   <div className={classNames(styles.PowerfulWrapper, "container-fluid text-center px-0 py-5")}>
    //     <div className={styles.PowerfulImage}></div>
    //     <div className="container pt-3">
    //       <h2>Free, open, simple</h2>
    //       <p>
    //         Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly
    //         with Google Analytics. The architecture is clean and is relatively easy to learn.
    //       </p>
    //     </div>
    //     <div className="container">
    //       <h2 className="pt-4">Powerful tooling</h2>
    //       <p> Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
    //     </div>
    //   </div>
    // );

    // <div className={classNames(styles.IntroductionWrapper, "container-fluid text-center")}>
    //   <div className="row flex-column flex-lg-row align-items-center position-relative">
    //     <div className={classNames(styles.DesktopImage, "col-12 col-xxl-6 px-0 position-relative order-lg-1")}>
    //       <img src="/images/illustration-laptop-mobile.svg" alt="editor Illustration" className="d-block d-lg-none img-fluid" />
    //       <img src="/images/illustration-laptop-desktop.svg" alt="editor Illustration" className="d-none d-lg-block" />
    //     </div>
    //     <div className="col-12 col-lg-6 d-flex order-lg-2 flex-column justify-content-center text-lg-start">
    //       <div className="container pt-3 pt-xxl-4">
    // <h2 className={styles.SubTitle}>Free, open, simple</h2>
    // <p>
    //   Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works
    //   seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
    // </p>
    //       </div>
    //       <div className="container pt-lg-5">
    // <h2 className={classNames(styles.SubTitle, "pt-4")}>Powerful tooling</h2>
    // <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.PowerfulWrapper}>
      <div className={styles.ImageWrapper}>
        <div className={styles.ImageContainer}>
          <img src="/images/illustration-laptop-mobile.svg" alt="editor Illustration" className="d-block d-lg-none" />
          <img src="/images/illustration-laptop-desktop.svg" alt="editor Illustration" className="d-none d-lg-block" />
        </div>
      </div>
      <div className={styles.TextWrapper}>
        <div className={styles.TextContainer}>
          <div className="container">
            <h2 className={styles.SubTitle}>Free, open, simple</h2>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works
              seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
          </div>
          <div className="container">
            <h2 className={classNames(styles.SubTitle, "pt-4")}>Powerful tooling</h2>
            <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
