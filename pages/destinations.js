import Head from "next/head";
import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import { Main } from "next/document";
import DestinationViewer from "../components/DestinationViewer";
import DestinationViewer2 from "../components/DestinationViewer2";

export default function Destination() {
  return (
    <Container fluid className="destination-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <DestinationViewer2 />
      </main>
    </Container>
  );
}
