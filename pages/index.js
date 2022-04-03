import Head from "next/head";
import Footer from "@components/Footer";
import SiteHeader from "@components/SiteHeader";
import TransformSection from "@components/TransformSection";
import StandoutSection from "@components/StandoutSection";
import BackgroundSection from "@components/BackgroundSection";
import Testimonials from "@components/Testimonials";
import Gallery from "@components/Gallery";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta property="og:title" content="Sunnyside Agency" />
        <meta property="og:site_name" content="Sunnyside Agency" />
        <meta property="og:url" content="https://sunnyside-landing-gs29hts.netlify.app/" />
        <meta property="og:description" content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
      </Head>
      <header>
        <SiteHeader />
      </header>
      <main>
        <TransformSection />
        <StandoutSection />
        <BackgroundSection />
        <Testimonials />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
