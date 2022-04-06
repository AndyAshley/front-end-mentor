import Head from "next/head";
import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Footer from "@components/Footer";
import { Main } from "next/document";
import TechnologyViewer from "../components/TechnologyViewer";
export default function Technology() {
  return (
    <Container fluid className="technology-bg px-0">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <MainNav />
      <main>
        <TechnologyViewer />
      </main>
      {/* 
        <Footer /> */}
    </Container>
  );
}
