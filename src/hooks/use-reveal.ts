import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements once they reach the viewport.
 *
 * A single rAF-throttled sweep handles every case — first paint, normal
 * scrolling, and pages that jump straight past a section via a nav link — so
 * content can never be left permanently invisible.
 */
export function useReveal() {
  useEffect(() => {
    let frame = 0;

    const sweep = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => {
          if (el.getBoundingClientRect().top < limit) el.classList.add("is-visible");
        });
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };

    sweep();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);
}
