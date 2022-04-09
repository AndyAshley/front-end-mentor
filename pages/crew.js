import Head from "next/head";
import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import { Main } from "next/document";
import CrewViewer from "@components/CrewViewer";
import CrewViewer2 from "@components/CrewViewer2";

export default function Crew() {
  return (
    <Container fluid className="crew-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <CrewViewer2 />
      </main>
    </Container>
  );
}
