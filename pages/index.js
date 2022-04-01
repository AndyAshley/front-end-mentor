import Head from "next/head";
import Footer from "@components/Footer";
import SiteHeader from "@components/SiteHeader";
import TransformSection from "@components/TransformSection";
import StandoutSection from "@components/StandoutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        {/* <link rel="icon" href="/favicon-32x32.png" /> */}
      </Head>
      <header>
        <SiteHeader />
      </header>
      <main>
        <TransformSection />
        <StandoutSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
