import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "span" | "li";
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
};

/**
 * Tesla-style reveal: content starts translated & transparent, then eases in
 * on the first intersection with the viewport. Uses IntersectionObserver + CSS
 * transitions with a long cubic-bezier — no JS per-frame animation.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 40,
  duration = 1100,
  className = "",
  once = true,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const style: CSSProperties = {
    transform: shown ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
    opacity: shown ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "transform, opacity",
  };

  // @ts-expect-error – dynamic tag
  return <Tag ref={ref} style={style} className={className}>{children}</Tag>;
}
