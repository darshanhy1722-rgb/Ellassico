import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

import colTables from "@/assets/col-tables.jpg";
import colWallart from "@/assets/col-wallart.jpg";
import colClocks from "@/assets/col-clocks.jpg";
import colTrays from "@/assets/col-trays.jpg";
import colCoasters from "@/assets/col-coasters.jpg";
import colGifts from "@/assets/col-gifts.jpg";
import atelier from "@/assets/atelier.jpg";
import galCoffee from "@/assets/gal-coffee.jpg";
import galWedding from "@/assets/gal-wedding.jpg";
import galDesk from "@/assets/gal-desk.jpg";
import galGeode from "@/assets/gal-geode.jpg";
import heroTable from "@/assets/hero-table.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Elclassico Designs" },
      { name: "description", content: "A curated archive of Elclassico resin commissions — river tables, wall panels, coffee tables, and bespoke objects for luxury interiors." },
      { property: "og:title", content: "Gallery — Elclassico Designs" },
      { property: "og:description", content: "A curated archive of bespoke resin commissions from the Elclassico atelier." },
      { property: "og:image", content: galCoffee },
      { name: "twitter:image", content: galCoffee },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { img: heroTable, alt: "Walnut river table in penthouse", cat: "Tables" },
  { img: galCoffee, alt: "Geode coffee table", cat: "Tables" },
  { img: colWallart, alt: "Emerald and gold wall panel", cat: "Wall Art" },
  { img: galGeode, alt: "Amethyst geode panel", cat: "Wall Art" },
  { img: colTables, alt: "Walnut river slab", cat: "Tables" },
  { img: galDesk, alt: "Executive resin desk", cat: "Desks" },
  { img: colClocks, alt: "Minimal resin clock", cat: "Clocks" },
  { img: colTrays, alt: "Marble tray", cat: "Objects" },
  { img: colCoasters, alt: "Blue geode coasters", cat: "Objects" },
  { img: galWedding, alt: "Wedding name board", cat: "Objects" },
  { img: colGifts, alt: "Corporate gift set", cat: "Objects" },
  { img: atelier, alt: "Atelier work", cat: "Studio" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Archive</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-6 leading-[0.95] max-w-4xl">
            Selected Works
          </h1>
          <p className="text-muted text-lg mt-8 max-w-xl leading-relaxed">
            A quiet archive of past commissions — every piece unique, none for sale twice.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-[1400px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((it, i) => (
            <figure key={i} className="break-inside-avoid overflow-hidden bg-surface group cursor-pointer">
              <img src={it.img} alt={it.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              <figcaption className="p-4 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest">{it.alt}</span>
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">{it.cat}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-foreground text-background text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-balance">Commission Your Own</h2>
        <p className="text-background/60 max-w-lg mx-auto mb-10">Every work in this archive began as a conversation.</p>
        <Link to="/contact" className="inline-flex px-10 py-5 bg-accent text-white font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all">
          Start Yours
        </Link>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
