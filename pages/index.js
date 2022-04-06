import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import styles from "@styles/home.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function Home() {
  return (
    <Container fluid className="index-bg px-0 pt-2">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <header>
        <MainNav />
      </header>
      <main>
        <Container className="pt-5 h-100">
          <Row className="flex-column px-3 py-3 text-light h-100">
            <Col className={classNames(styles.HomeText, "d-flex flex-column align-items-center text-center")}>
              <h1>SO, YOU WANT TO TRAVEL TO</h1>
              <span>SPACE</span>
              <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </Col>
            <Col className={styles.ExploreWrapper}>
              <Link href="/destination">
                <a>
                  <div className={styles.Explore}>
                    <span>EXPLORE</span>
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      {/* 
      <Footer /> */}
    </Container>
  );
}
