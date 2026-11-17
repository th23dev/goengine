import { useState } from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import WhatsAppDialog from "./components/ui/WhatsAppDialog";
import WhatsAppFloating from "./components/ui/WhatsAppFloating";
import About from "./components/sections/About";
import useMotion from "./hooks/useMotion";
import usePageLoading from "./hooks/usePageLoading";
import PageSkeleton from "./components/ui/PageSkeleton";
export default function App() {
  const loading = usePageLoading();
  useMotion(!loading);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const openWhatsApp = () => setWhatsappOpen(true);
  return (
    <div className="app-shell">
      {loading && <PageSkeleton />}
      <div className="app-content group/page" data-loading={loading} aria-busy={loading} inert={loading}>
      <a
        className="skip fixed -top-25-[20px] [background:white] p-2.5[z-100:focus]:top-[10px]"
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
