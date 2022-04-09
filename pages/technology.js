import Head from "next/head";
import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import { Main } from "next/document";
import TechnologyViewer from "../components/TechnologyViewer";
import TechnologyViewer2 from "../components/TechnologyViewer2";

export default function Technology() {
  return (
    <Container fluid className="technology-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <TechnologyViewer2 />
      </main>
    </Container>
  );
}
