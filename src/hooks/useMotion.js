import { useEffect } from "react";
import "./motion.css";

export default function useMotion(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    let cleanup = () => {};
    function setup() {
      cleanup();
      if (preference.matches) return;
      const elements = [
        ...document.querySelectorAll(
          ".platform-intro > *, .section-heading, .service-heading, .service-chapters, .service-story-copy, .portfolio-projects > article, .steps > article, .about-copy, .about-principles > article, .faq-section > div:first-child, .faq-item, .contact > h2, .contact > p, .contact > button, .contact-socials, .footer-directory > *, .footer-wordmark",
        ),
      ];
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
        },
        { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
      );
      elements.forEach((element, index) => {
        element.classList.add("scroll-reveal");
        element.dataset.reveal = element.matches(".portfolio-projects > article") ? "card" : element.matches(".about-copy, .service-story-copy") ? "slide" : element.matches(".section-heading, .service-heading, .footer-wordmark") ? "rise" : "soft";
        element.style.setProperty("--reveal-delay", `${(index % 3) * 75}ms`);
        observer.observe(element);
      });
      const focusReveal = event => event.target.closest(".scroll-reveal")?.classList.add("revealed");
      document.addEventListener("focusin", focusReveal);
      const ornaments = [...document.querySelectorAll(".contact-orbit, .hero-waves")];
      let scrollFrame = 0;
      const updateScroll = () => {
        scrollFrame = 0;
        ornaments.forEach(element => {
          const rect = element.parentElement.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > innerHeight) return;
          const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top - rect.height / 2) / innerHeight));
          element.style.setProperty("--scroll-drift", `${progress * 45}px`);
          element.style.setProperty("--scroll-turn", `${progress * 12}deg`);
        });
      };
      const scroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); };
      window.addEventListener("scroll", scroll, { passive: true });
      window.addEventListener("resize", scroll);
      updateScroll();
      let frame;
      const move = (event) => {
        if (!pointer.matches) return;
        const target = event.target.closest(
          ".engine-art, .service, .button, .nav-cta",
        );
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
          if (target.matches(".button, .nav-cta"))
            target.style.translate = `${x * 7}px ${y * 7}px`;
        });
      };
      const leave = (event) => {
        const target = event.target.closest(
          ".engine-art, .service, .button, .nav-cta",
        );
        if (
          !target ||
          (event.relatedTarget instanceof Node &&
            target.contains(event.relatedTarget))
        )
          return;
        cancelAnimationFrame(frame);
        target.style.translate = "";
        target.style.setProperty("--tilt-x", "0deg");
        target.style.setProperty("--tilt-y", "0deg");
      };
      document.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerout", leave);
      cleanup = () => {
        observer.disconnect();
        cancelAnimationFrame(scrollFrame);
        window.removeEventListener("scroll", scroll);
        window.removeEventListener("resize", scroll);
        document.removeEventListener("focusin", focusReveal);
        ornaments.forEach(element => {
          element.style.removeProperty("--scroll-drift");
          element.style.removeProperty("--scroll-turn");
        });
        cancelAnimationFrame(frame);
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerout", leave);
        elements.forEach((element) =>
          element.classList.remove("scroll-reveal", "revealed"),
        );
        document
          .querySelectorAll(".engine-art, .service, .button, .nav-cta")
          .forEach((element) => {
            element.style.translate = "";
            element.style.setProperty("--tilt-x", "0deg");
            element.style.setProperty("--tilt-y", "0deg");
          });
      };
    }
    setup();
    preference.addEventListener("change", setup);
    return () => {
      cleanup();
      preference.removeEventListener("change", setup);
    };
  }, [enabled]);
}
