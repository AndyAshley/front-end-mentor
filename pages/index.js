import { Container } from "react-bootstrap";
import MainNav from "@components/MainNav";
import Home from "@components/Home";

export default function Main() {
  return (
    <Container fluid className="index-bg px-0">
      <header>
        <MainNav />
      </header>
      <main>
        <Home />
      </main>
    </Container>
  );
}
