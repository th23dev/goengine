import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BriefingDialog from "./components/BriefingDialog";
import About from "./components/About";
import useMotion from "./hooks/useMotion";
export default function App() {
  useMotion();
  const [briefingOpen, setBriefingOpen] = useState(false);
  const openBriefing = () => setBriefingOpen(true);
  return (
    <>
      <a
        className="skip fixed top-[-100px] left-[20px] [background:white] p-[10px] z-[100] [&:focus]:top-[10px]"
        href="#conteudo"
      >
        Pular para conteúdo
      </a>
      <Header onStartProject={openBriefing} />
      <main id="conteudo">
        <Hero onStartProject={openBriefing} />
        <About />
        <Services onStartProject={openBriefing} />
        <Projects onStartProject={openBriefing} />
        <Process />
        <FAQ />
        <Contact onStartProject={openBriefing} />
      </main>
      <Footer onStartProject={openBriefing} />
      {briefingOpen && (
        <div
          className="modal-overlay fixed inset-[0px] [background:rgba(0,_0,_0,_0.5)] [backdrop-filter:blur(8px)] z-[100] flex
              items-center justify-center p-[20px] [overflow-y:auto]"
        >
          <BriefingDialog close={() => setBriefingOpen(false)} />
        </div>
      )}
    </>
  );
}
