import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vignesh Ashokan</title>
      </Head>
      <Header />
      {/* Intro */}
      <section id="intro" className="snap-center">
        <Intro />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
