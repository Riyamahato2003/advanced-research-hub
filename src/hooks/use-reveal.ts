import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements as they enter the viewport.
 *
 * Anything already on screen is shown immediately (before the observer is even
 * created) so the first paint never leaves content invisible; everything below
 * the fold fades up on first intersection.
 */
export function useReveal() {
  useEffect(() => {
    const all = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

    const show = (el: Element) => el.classList.add("is-visible");

    const alreadyInView = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    };

    all().forEach((el) => {
      if (alreadyInView(el)) show(el);
    });

    const pending = all();
    if (!pending.length) return;

    if (!("IntersectionObserver" in window)) {
      pending.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
