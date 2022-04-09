import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import styles from "../components/css/navbar.module.css";
import classNames from "classnames";

export default function MainNav() {
  const router = useRouter();
  const [currentPath] = useState(router.pathname);

  function setActivePage(pageList) {
    return `${pageList.includes(currentPath) ? "active font-weight-bold" : ""} nav-item`;
  }

  return (
    <>
      <Container fluid className={classNames(styles.NavContainer, "px-0 d-none d-md-block")}>
        <Nav className={styles.Navbar}>
          <div className="mt-2 mt-lg-0 ms-4 ms-lg-5">
            <Link href="/">
              <a>
                <img
                  src="/images/shared/logo.svg"
                  alt="Space Tourism Logo"
                  onClick={(e) => {
                    setActivePage("/");
                  }}
                />
              </a>
            </Link>
          </div>

          <div className={classNames(styles.NavWrapper, "blur")}>
            <span className={styles.Bar}></span>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <span
                      className="d-none d-lg-inline"
                      onClick={(e) => {
                        setActivePage([currentPath]);
                      }}
                    >
                      00{" "}
                    </span>
                    Home
                  </a>
                </Link>
                <span className={styles.Underline} style={{ opacity: [currentPath] == "/" ? "1" : "" }}></span>
              </li>
              <li>
                <Link href="/destinations">
                  <a>
                    <span
                      className="d-none d-lg-inline"
                      onClick={(e) => {
                        setActivePage([currentPath]);
                      }}
                    >
                      01{" "}
                    </span>
                    Desinations
                  </a>
                </Link>
                <span className={styles.Underline} style={{ opacity: [currentPath] == "/destinations" ? "1" : "" }}></span>
              </li>
              <li>
                <Link href="/crew">
                  <a>
                    <span
                      className="d-none d-lg-inline"
                      onClick={(e) => {
                        setActivePage([currentPath]);
                      }}
                    >
                      02{" "}
                    </span>
                    Crew
                  </a>
                </Link>
                <span className={styles.Underline} style={{ opacity: [currentPath] == "/crew" ? "1" : "" }}></span>
              </li>
              <li>
                <Link href="/technology">
                  <a>
                    <span
                      className="d-none d-lg-inline"
                      onClick={(e) => {
                        setActivePage([currentPath]);
                      }}
                    >
                      03{" "}
                    </span>
                    Technology
                  </a>
                </Link>
                <span className={styles.Underline} style={{ opacity: [currentPath] == "/technology" ? "1" : "" }}></span>
              </li>
            </ul>
          </div>
        </Nav>
      </Container>

      <Navbar expand={false} className="main-nav py-0 d-block d-md-none w-100" style={{ zIndex: "500" }}>
        <Container fluid>
          <Container className="d-flex justify-content-between">
            <Navbar.Brand href="/">
              <img src="/images/shared/logo.svg" alt="Space Tourism Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar">
              <img src="/images/shared/icon-hamburger.svg" />
            </Navbar.Toggle>
          </Container>
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" className="blur">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href="/">
                  <a>
                    <b>00</b> HOME
                  </a>
                </Link>
                <Link href="/destinations">
                  <a>
                    <b style={{ marginRight: "2px" }}>01</b> DESTINATION
                  </a>
                </Link>
                <Link href="/crew">
                  <a>
                    <b style={{ marginRight: "1px" }}>02</b> CREW
                  </a>
                </Link>
                <Link href="/technology">
                  <a>
                    <b style={{ marginRight: "1px" }}>03</b> TECHNOLOGY
                  </a>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
