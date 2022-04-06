import Head from "next/head";
import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import { Main } from "next/document";
import DestinationViewer from "../components/DestinationViewer";

export default function Destination() {
  return (
    <Container fluid className="destination-bg px-0">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <MainNav />
      <main>
        <DestinationViewer />
      </main>
      {/* 
        <Footer /> */}
    </Container>
  );
}
