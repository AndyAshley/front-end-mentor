import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import TechnologyViewer from "../components/TechnologyViewer";

export default function Technology() {
  return (
    <Container fluid className="technology-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <TechnologyViewer />
      </main>
    </Container>
  );
}
