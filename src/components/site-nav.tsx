import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-foreground/5"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className={["text-lg font-extrabold tracking-tighter uppercase transition-colors", scrolled ? "text-foreground" : "text-white"].join(" ")}>
          Elclassico
        </Link>

        <div className={["hidden md:flex gap-9 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors", scrolled ? "text-foreground/60" : "text-white/70"].join(" ")}>
          <Link to="/" hash="collections" className="hover:opacity-100 hover:text-current transition-opacity">Collections</Link>
          <Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link>
          <Link to="/" hash="about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/" hash="process" className="hover:opacity-100 transition-opacity">Process</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>

        <Link
          to="/contact"
          className={[
            "hidden md:inline-flex px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all",
            scrolled
              ? "bg-foreground text-background hover:bg-accent"
              : "bg-white text-foreground hover:bg-accent hover:text-white",
          ].join(" ")}
        >
          Request Quote
        </Link>

        <button
          onClick={() => setOpen(v => !v)}
          className={["md:hidden text-xs font-bold uppercase tracking-widest", scrolled ? "text-foreground" : "text-white"].join(" ")}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-foreground/5">
          <div className="px-6 py-6 flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.2em]">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/dashboard" onClick={() => setOpen(false)}>Studio</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
