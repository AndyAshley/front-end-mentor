import Head from "next/head";
import Header from "@components/Header";
import Introduction from "@components/Introduction";
import Infrastructure from "@components/Infrastructure";
import Powerful from "@components/Powerful";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container-fluid px-0">
      <Head>
        <title>Frontend Mentor | [Blogr]</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Introduction />
        <Infrastructure />
        <Powerful />
      </main>
      <Footer />
    </div>
  );
}
