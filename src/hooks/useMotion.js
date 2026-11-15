import { useEffect } from "react";

export default function useMotion() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    let cleanup = () => {};
    function setup() {
      cleanup();
      if (preference.matches) return;
      const elements = [...document.querySelectorAll(".section-heading, .service, .projects > article, .steps > article, .about-copy, .about-principles, .faq-section, .contact")];
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.08 });
      elements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${index % 3 * 65}ms`);
        observer.observe(element);
      });
      let frame;
      const move = (event) => {
        if (!pointer.matches) return;
        const target = event.target.closest(".engine-art, .service, .button, .nav-cta");
        if (!target) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          target.style.setProperty("--pointer-x", `${(x + 0.5) * 100}%`);
          target.style.setProperty("--pointer-y", `${(y + 0.5) * 100}%`);
          target.style.setProperty("--tilt-x", `${-y * 9}deg`);
          target.style.setProperty("--tilt-y", `${x * 9}deg`);
          if (target.matches(".button, .nav-cta")) target.style.translate = `${x * 7}px ${y * 7}px`;
        });
      };
      const leave = (event) => {
        const target = event.target.closest(".engine-art, .service, .button, .nav-cta");
        if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
        cancelAnimationFrame(frame);
        target.style.translate = "";
        target.style.setProperty("--tilt-x", "0deg");
        target.style.setProperty("--tilt-y", "0deg");
      };
      document.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerout", leave);
      cleanup = () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerout", leave);
        elements.forEach(element => element.classList.remove("reveal", "revealed"));
        document.querySelectorAll(".engine-art, .service, .button, .nav-cta").forEach(element => {
          element.style.translate = "";
          element.style.setProperty("--tilt-x", "0deg");
          element.style.setProperty("--tilt-y", "0deg");
        });
      };
    }
    setup();
    preference.addEventListener("change", setup);
    return () => { cleanup(); preference.removeEventListener("change", setup); };
  }, []);
}
