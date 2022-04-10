import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";

import DestinationViewer from "../components/DestinationViewer";

export default function Destination() {
  return (
    <Container fluid className="destination-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <DestinationViewer />
      </main>
    </Container>
  );
}
