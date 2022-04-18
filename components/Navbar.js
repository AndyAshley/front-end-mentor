import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "../components/css/navbar.module.css";

export default function MainNavbar() {
  const [product, setProduct] = useState(false);
  const [productMobile, setProductMobile] = useState(false);
  const [company, setCompany] = useState(false);
  const [companyMobile, setCompanyMobile] = useState(false);
  const [connect, setConnect] = useState(false);
  const [connectMobile, setConnectMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const productRef = useRef();
  const productBtnRef = useRef();
  const companyRef = useRef();
  const companyBtnRef = useRef();
  const connectRef = useRef();
  const connectBtnRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (product && productRef.current && !productRef.current.contains(e.target) && !productBtnRef.current.contains(e.target)) {
        setProduct(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [product]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (company && companyRef.current && !companyRef.current.contains(e.target) && !companyBtnRef.current.contains(e.target)) {
        setCompany(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [company]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (connect && connectRef.current && !connectRef.current.contains(e.target) && !connectBtnRef.current.contains(e.target)) {
        setConnect(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [connect]);

  return (
    <div className="container-fluid position-relative d-flex justify-content-between justify-content-md-start align-items-center py-5 px-4">
      <div className={styles.NavLogo}>
        <img src="/images/logo.svg" alt="Blogr Logo" />
      </div>
      <div className={classNames(styles.NavBarWrapper, "d-md-flex justify-content-between align-items-center w-100 d-none")}>
        <div className={classNames(styles.NavLinkWrapper, "align-items-center")}>
          <div className={classNames(styles.NavLinks, "text-left")}>
            <button
              onClick={() => {
                setProduct(!product);
              }}
              ref={productBtnRef}
            >
              Product
              <span>
                <img src="/images/icon-arrow-light.svg" alt="caret down" aria-hidden="true" style={{ transform: product ? `rotate(-180deg)` : `rotate(0deg)` }} />
              </span>
            </button>
            {product && (
              <ul className={styles.NavDropdown} style={{ display: product ? "block" : "none" }} ref={productRef}>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
              </ul>
            )}
          </div>
          <div className={classNames(styles.NavLinks, "text-left")}>
            <button
              onClick={() => {
                setCompany(!company);
              }}
              ref={companyBtnRef}
            >
              Company
              <span>
                <img src="/images/icon-arrow-light.svg" alt="caret down" aria-hidden="true" style={{ transform: company ? `rotate(-180deg)` : `rotate(0deg)` }} />
              </span>
            </button>
            {company && (
              <ul className={styles.NavDropdown} style={{ display: company ? "block" : "none" }} ref={companyRef}>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            )}
          </div>
          <div className={classNames(styles.NavLinks, "text-left")}>
            <button
              onClick={() => {
                setConnect(!connect);
              }}
              ref={connectBtnRef}
            >
              Connect
              <span>
                <img src="/images/icon-arrow-light.svg" alt="caret down" aria-hidden="true" style={{ transform: connect ? `rotate(-180deg)` : `rotate(0deg)` }} />
              </span>
            </button>
            {connect && (
              <ul className={styles.NavDropdown} style={{ display: connect ? "block" : "none" }} ref={connectRef}>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button className="mx-4 fw-bold button-transparent font-primary">Login</button>
          <button className="button-main red-hover font-secondary">Sign Up</button>
        </div>
      </div>
      <button
        className="button-transparent"
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        <img src={isMobile ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"} alt="Navigation Icon" aria-label="Open Navigation" className="d-md-none d-block" />
      </button>
      <div className={styles.MobileWrapper} style={{ display: isMobile ? "block" : "none" }}>
        <button
          className="button-main button-transparent-mobile font-primary fw-bold"
          onClick={() => {
            setProductMobile(!productMobile);
          }}
        >
          Product
          <span>
            <img src="/images/icon-arrow-dark.svg" alt="caret down" aria-hidden="true" className="ms-2" style={{ transform: productMobile ? `rotate(-180deg)` : `rotate(0deg)` }} />
          </span>
        </button>
        <ul style={{ maxHeight: productMobile ? "200px" : "0px", padding: productMobile ? "1rem" : "0rem", overflow: "hidden" }}>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
        <button
          className="button-main button-transparent-mobile font-primary fw-bold"
          onClick={() => {
            setCompanyMobile(!companyMobile);
          }}
        >
          Company
          <span>
            <img src="/images/icon-arrow-dark.svg" alt="caret down" aria-hidden="true" className="ms-2" style={{ transform: companyMobile ? `rotate(-180deg)` : `rotate(0deg)` }} />
          </span>
        </button>
        <ul style={{ maxHeight: companyMobile ? "200px" : "0px", padding: companyMobile ? "1rem" : "0rem", overflow: "hidden" }}>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button
          className="button-main button-transparent-mobile font-primary fw-bold"
          onClick={() => {
            setConnectMobile(!connectMobile);
          }}
        >
          Connect
          <span>
            <img src="/images/icon-arrow-dark.svg" alt="caret down" aria-hidden="true" className="ms-2" style={{ transform: connectMobile ? `rotate(-180deg)` : `rotate(0deg)` }} />
          </span>
        </button>
        <ul style={{ maxHeight: connectMobile ? "200px" : "0px", padding: connectMobile ? "1rem" : "0rem", overflow: "hidden" }}>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
        <hr />
        <div className="d-flex flex-column px-5">
          <button className="button-main button-transparent-mobile font-primary fw-bold mb-1 mx-2">Login</button>
          <button className="button-main red-button-mobile font-secondary mx-2">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
