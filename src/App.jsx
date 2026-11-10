import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BriefingDialog from "./components/BriefingDialog";
import "./App.css";
export default function App() {
  const [briefingOpen, setBriefingOpen] = useState(false);
  const openBriefing = () => setBriefingOpen(true);
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para conteúdo
      </a>
      <Header onStartProject={openBriefing} />
      <main id="conteudo">
        <Hero onStartProject={openBriefing} />
        <Capabilities />
        <Services onStartProject={openBriefing} />
        <Projects />
        <Process />
        <FAQ />
        <Contact onStartProject={openBriefing} />
      </main>
      <Footer />
      {briefingOpen && (
        <div className="modal-overlay">
          <BriefingDialog close={() => setBriefingOpen(false)} />
        </div>
      )}
    </>
  );
}
