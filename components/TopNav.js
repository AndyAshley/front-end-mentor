import styles from "../components/css/TopNav.module.css";
import { Navbar, NavbarBrand, Nav, Button } from "react-bootstrap";
import classNames from "classnames";

export default function TopNav() {
  return (
    <Navbar expand="md" className={classNames(styles.NavContainer, "pt-4")}>
      <NavbarBrand href="/index">
        <img src="/logo.svg" alt="Sunnyside Logo" className="img-fluid" />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="px-0" id="toggler" style={{ border: "none", boxShadow: "none" }}>
        <img src="/icon-hamburger.svg" alt="Mobile Menu Icon" style={{ height: "20px", width: "25px" }} />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={classNames(styles.NavLinks, "ms-md-auto mt-5 mt-md-0 py-4 py-md-0 align-items-center")}>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Button variant="light" className="btn btn-lg">
            CONTACT
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
