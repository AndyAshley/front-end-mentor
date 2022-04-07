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
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <MainNav />
      <main>
        <CrewViewer2 />
      </main>
      {/* 
        <Footer /> */}
    </Container>
  );
}
