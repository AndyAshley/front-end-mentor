import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "@components/Hero/Hero";
import Backerbox from "@components/Backerbox";
import About from "@components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Crowdfunding product page</title>
        <meta name="description" content="  Mastercraft Bamboo Monitor Riser: A beautiful & handcrafted monitor stand to reduce neck and eye strain." />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <Hero />
        <Backerbox />
        <About />
      </main>
    </>
  );
}
