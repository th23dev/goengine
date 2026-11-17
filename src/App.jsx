import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppDialog from "./components/WhatsAppDialog";
import WhatsAppFloating from "./components/WhatsAppFloating";
import About from "./components/About";
import useMotion from "./hooks/useMotion";
import usePageLoading from "./hooks/usePageLoading";
import PageSkeleton from "./components/PageSkeleton";
export default function App() {
  const loading = usePageLoading();
  useMotion(!loading);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const openWhatsApp = () => setWhatsappOpen(true);
  return (
    <div className="app-shell">
      {loading && <PageSkeleton />}
      <div className="app-content" data-loading={loading} aria-busy={loading} inert={loading}>
      <a
        className="skip fixed top-[-100px] left-[20px] [background:white] p-[10px] z-[100] [&:focus]:top-[10px]"
        href="#conteudo"
      >
        Pular para conteúdo
      </a>
      <Header onStartProject={openWhatsApp} />
      <main id="conteudo">
        <Hero onStartProject={openWhatsApp} />
        <About />
        <Services onStartProject={openWhatsApp} />
        <Projects onStartProject={openWhatsApp} />
        <Process />
        <FAQ />
        <Contact onStartProject={openWhatsApp} />
      </main>
      <Footer onStartProject={openWhatsApp} />
      <WhatsAppFloating onClick={openWhatsApp} />
      </div>
      {whatsappOpen && (
        <WhatsAppDialog close={() => setWhatsappOpen(false)} />
      )}
    </div>
  );
}
