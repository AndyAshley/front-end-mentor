import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";

import CrewViewer from "@components/CrewViewer";

export default function Crew() {
  return (
    <Container fluid className="crew-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <CrewViewer />
      </main>
    </Container>
  );
}
