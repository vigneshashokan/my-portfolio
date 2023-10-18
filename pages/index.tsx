import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { Experience } from "@/typings";
import { experiences } from "@/data/resumeData";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

type Props = {
  experiences: [Experience];
};

export default function Home({ experiences }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#intro">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grascale hover:grayscale-0 cursor-pointer"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
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
