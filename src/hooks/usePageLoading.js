import { useEffect, useState } from "react";

export default function usePageLoading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    const cleanups = [];
    const images = [...document.querySelectorAll(".app-content img")];
    const pending = images.map(image => {
      if (image.complete) return Promise.resolve();
      image.classList.add("image-loading");
      return new Promise(resolve => {
        const finish = () => {
          image.classList.remove("image-loading");
          resolve();
        };
        image.addEventListener("load", finish, { once: true });
        image.addEventListener("error", finish, { once: true });
        cleanups.push(() => {
          image.removeEventListener("load", finish);
          image.removeEventListener("error", finish);
          image.classList.remove("image-loading");
        });
      });
    });
    // Lazy images keep their own placeholder and never block the page.
    const critical = pending.filter((_, index) => images[index].loading !== "lazy");
    const finish = () => { if (active) setLoading(false); };
    const timeout = setTimeout(finish, 4000);
    Promise.allSettled([document.fonts.ready, ...critical]).then(() => {
      clearTimeout(timeout);
      finish();
    });
    return () => {
      active = false;
      clearTimeout(timeout);
      cleanups.forEach(cleanup => cleanup());
    };
  }, []);
  return loading;
}
