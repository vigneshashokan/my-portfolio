import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { Experience } from "@/typings";
import { experiences } from "@/data/resumeData";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

type Props = {
  experiences: [Experience];
};

export default function Home({ experiences }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Vignesh Ashokan</title>
      </Head>
      <Header />
      <section id="intro" className="snap-start">
        <Intro />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      experiences: experiences,
    },
  };
}
