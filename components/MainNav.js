import Link from "next/link";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

export default function MainNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="main-nav d-none d-md-block d-flex flex-row align-items-center">
        <div className="ms-5">
          <img src="/images/shared/logo.svg" />
        </div>
        <Container className="h-100">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-evenly">
              <Link href="/">
                <a>
                  <b>00</b> HOME
                </a>
              </Link>
              <Link href="/destination">
                <a>
                  <b style={{ marginRight: "2px" }}>01</b> DESTINATION
                </a>
              </Link>
              <Link href="/crew">
                <a>
                  <b style={{ marginRight: "1px" }}>03</b> CREW
                </a>
              </Link>
              <Link href="/technology">
                <a>
                  <b style={{ marginRight: "1px" }}>04</b> TECHNOLOGY
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand={false} className="main-nav py-0 d-block d-md-none" style={{ zIndex: "4" }}>
        <Container fluid>
          <Container className="d-flex justify-content-between">
            <img src="/images/shared/logo.svg" height="40px" width="40px" />
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
                <Link href="/destination">
                  <a>
                    <b style={{ marginRight: "2px" }}>01</b> DESTINATION
                  </a>
                </Link>
                <Link href="/crew">
                  <a>
                    <b style={{ marginRight: "1px" }}>03</b> CREW
                  </a>
                </Link>
                <Link href="/technology">
                  <a>
                    <b style={{ marginRight: "1px" }}>04</b> TECHNOLOGY
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
