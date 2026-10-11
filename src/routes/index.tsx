import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/whatsapp-fab";
import { Reveal } from "@/components/reveal";
import { useScrollY } from "@/hooks/use-scroll-y";

import heroTable from "@/assets/hero-table.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elclassico Designs — Luxury Handcrafted Resin Art" },
      { name: "description", content: "Handcrafted resin river tables, wall art, clocks and objects. Every piece is one of one, designed for modern homes and luxury interiors." },
      { property: "og:title", content: "Elclassico Designs — Luxury Handcrafted Resin Art" },
      { property: "og:description", content: "Handcrafted masterpieces designed exclusively for modern homes, high-end offices, and bespoke lifestyles." },
      { property: "og:image", content: heroTable },
      { name: "twitter:image", content: heroTable },
    ],
  }),
  component: Home,
});

const collections = [
  { id: "RT-001", title: "Resin Tables", desc: "Large-scale walnut river centerpieces.", img: colTables, offset: false },
  { id: "WA-004", title: "Wall Art", desc: "Abstract ocean topography for modern walls.", img: colWallart, offset: true },
  { id: "LC-012", title: "Luxury Clocks", desc: "Precision movements encased in epoxy glass.", img: colClocks, offset: false },
  { id: "ST-021", title: "Serving Trays", desc: "Marble-inspired trays for hosting rituals.", img: colTrays, offset: true },
  { id: "CS-034", title: "Coasters", desc: "Geode-cut sets in translucent blue & gold.", img: colCoasters, offset: false },
  { id: "CG-050", title: "Corporate Gifts", desc: "Bespoke gift sets for discerning clients.", img: colGifts, offset: true },
];

const whyChoose = [
  { k: "01", t: "Handmade", d: "Every piece hand-poured and hand-polished in our studio." },
  { k: "02", t: "Premium Materials", d: "UV-stabilised resins and grade-A live-edge hardwoods." },
  { k: "03", t: "100% Custom", d: "Every commission is designed around your space." },
  { k: "04", t: "Luxury Finishing", d: "Mirror-clear polish with meticulous edge detailing." },
  { k: "05", t: "Worldwide Shipping", d: "White-glove crating and delivery to any address." },
  { k: "06", t: "Built to Last", d: "Heirloom-quality construction, engineered for decades." },
];

const gallery = [
  { img: galCoffee, alt: "Geode coffee table", h: "row-span-2" },
  { img: colWallart, alt: "Emerald and gold wall panel", h: "" },
  { img: galDesk, alt: "Executive resin desk", h: "" },
  { img: galGeode, alt: "Amethyst geode wall art", h: "row-span-2" },
  { img: colTables, alt: "Walnut river table", h: "" },
  { img: galWedding, alt: "Wedding name board", h: "" },
  { img: colTrays, alt: "Marble tray", h: "" },
  { img: colCoasters, alt: "Blue geode coasters", h: "" },
];

const testimonials = [
  { stars: 5, quote: "The finish looks like liquid glass. Our dining table became the centerpiece of our home the moment it was installed.", name: "Julianne Rossi", role: "Interior Designer, Milan" },
  { stars: 5, quote: "Absolute mastery of the medium. The depth of the resin and the quality of the walnut is beyond anything else on the market.", name: "Marcus Thorne", role: "Private Collector, London" },
  { stars: 5, quote: "Our commission arrived flawless. Absolutely stunning craftsmanship and a truly one-of-a-kind piece of art.", name: "Anaïs Laurent", role: "Architect, Paris" },
];

const process = [
  { k: "01", t: "Consultation", d: "Defining dimensions, wood species, and resin pigments for your space." },
  { k: "02", t: "Design", d: "3D visualisations and material samples for client approval." },
  { k: "03", t: "Crafting", d: "Precise multi-layer pouring, curing, and hand-polishing." },
  { k: "04", t: "Delivery", d: "White-glove installation and styling in your interior." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO — Tesla-style parallax + staged reveal */}
      <HeroSection />



      {/* COLLECTIONS */}
      <section id="collections" className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">01 / Curated</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">Featured Collections</h2>
            </div>
            <p className="max-w-md text-muted text-sm leading-relaxed">
              Six signature series. Each one anchored in decades of resin craft and quietly obsessive material selection.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {collections.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className={["group cursor-pointer block", c.offset ? "md:mt-16" : ""].join(" ")}>
                <div className="overflow-hidden mb-6 bg-surface aspect-[4/5]">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight">{c.title}</h3>
                    <p className="text-muted text-sm mt-1">{c.desc}</p>
                  </div>
                  <span className="font-mono text-[10px] text-accent">#{c.id}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <Reveal y={60} className="relative">
            <img
              src={atelier}
              alt="Artisan pouring blue resin over walnut in the studio"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover ring-1 ring-white/10"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block w-48 h-48 border border-white/10" />
          </Reveal>
          <Reveal delay={150}>
            <span className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.95]">
              Every Piece is<br />One of One.
            </h2>
            <p className="text-background/60 text-lg leading-relaxed mb-6 max-w-md">
              At Elclassico Designs, we believe true luxury cannot be replicated. Each pour is a unique dance between chemistry and wood grain — a masterpiece that exists nowhere else on Earth.
            </p>
            <p className="text-background/50 text-sm leading-relaxed mb-10 max-w-md">
              From the selection of a live-edge slab to the final polish, every stage is executed by hand in our atelier. We do not mass produce.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { n: "12+", l: "Years Crafting" },
                { n: "400+", l: "Bespoke Pieces" },
                { n: "28", l: "Countries Shipped" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={300 + i * 120}>
                  <div className="text-3xl font-bold text-accent">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">{s.l}</div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">02 / The Standard</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">Why Elclassico</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
            {whyChoose.map((w, i) => (
              <Reveal key={w.k} delay={i * 70} className="bg-background p-8 md:p-10 group hover:bg-surface transition-colors">
                <div className="font-mono text-xs text-accent mb-6">{w.k}</div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-3">{w.t}</h4>
                <p className="text-sm text-muted leading-relaxed">{w.d}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">03 / Archive</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">Selected Works</h2>
            </div>
            <Link to="/gallery" className="text-xs font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors self-start">
              View full gallery →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {gallery.map((g, i) => (
              <Reveal key={i} as="div" delay={i * 60} className={["overflow-hidden bg-background", g.h].join(" ")}>
                <img src={g.img} alt={g.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-[1.06]" />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">04 / Voices</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">Notes From Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} as="div" delay={i * 120}>
                <blockquote className="p-10 border border-foreground/5 hover:border-accent/40 transition-colors h-full">
                  <div className="text-gold text-sm tracking-widest mb-6">{"★".repeat(t.stars)}</div>
                  <p className="text-xl font-medium tracking-tight mb-8 leading-snug text-balance">"{t.quote}"</p>
                  <footer className="flex items-center gap-4 pt-6 border-t border-foreground/5">
                    <div className="w-10 h-10 rounded-full bg-surface-2" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest">{t.name}</div>
                      <div className="text-[10px] text-muted mt-0.5">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">05 / The Journey</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 uppercase">From Vision to Reality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-foreground/10">
            {process.map((p, i) => (
              <Reveal key={p.k} delay={i * 120} className="p-8 md:p-10 bg-background relative group hover:bg-accent hover:text-white transition-colors duration-500">
                <span className="font-mono text-5xl text-foreground/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors">{p.k}</span>
                <h4 className="font-bold uppercase tracking-tight text-lg mb-3">{p.t}</h4>
                <p className="text-sm text-muted group-hover:text-white/70 transition-colors">{p.d}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 md:py-32 bg-accent text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.95] text-balance">
            Let's Create Something<br />Beautiful Together
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-white text-accent font-bold uppercase text-xs tracking-widest hover:bg-foreground hover:text-white transition-all">
              Request Quote
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border border-white/30 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

/**
 * Tesla-style hero: fixed-viewport section with a parallax background image
 * (background moves slower than scroll), heavy vignette, and staggered
 * fade-up text reveal. The scroll indicator fades out as the user scrolls.
 */
function HeroSection() {
  const y = useScrollY();
  const parallax = Math.min(y * 0.35, 260); // background drifts down slower than scroll
  const contentShift = Math.min(y * 0.18, 120);
  const overlayFade = Math.min(y / 500, 1);
  const indicatorOpacity = Math.max(1 - y / 220, 0);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div
        className="absolute inset-0 -top-24 will-change-transform"
        style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.08)` }}
      >
        <img
          src={heroTable}
          alt="Luxury walnut resin river table in a sunlit penthouse"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-80 animate-fade-in"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
      <div
        className="absolute inset-0 bg-black transition-opacity"
        style={{ opacity: overlayFade * 0.35 }}
      />

      <div
        className="relative max-w-[1400px] mx-auto px-6 pt-20 w-full will-change-transform"
        style={{ transform: `translate3d(0, ${-contentShift}px, 0)`, opacity: 1 - overlayFade * 0.6 }}
      >
        <div className="max-w-4xl">
          <Reveal delay={100} y={20} duration={900}>
            <span className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-6 block">
              One of One Artistry
            </span>
          </Reveal>
          <Reveal delay={220} y={30} duration={1200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter text-balance mb-8">
              Luxury Resin Art That Transforms Spaces
            </h1>
          </Reveal>
          <Reveal delay={440} y={20} duration={1100}>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 text-pretty leading-relaxed">
              Handcrafted masterpieces designed exclusively for modern homes, high-end offices, and bespoke lifestyles.
            </p>
          </Reveal>
          <Reveal delay={620} y={20} duration={1100}>
            <div className="flex flex-wrap gap-4">
              <a href="#collections" className="px-8 py-4 bg-accent text-white font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                Explore Collection
              </a>
              <Link to="/contact" className="px-8 py-4 border border-white/25 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Custom Order
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-6 right-6 max-w-[1400px] mx-auto flex justify-between items-end text-white/50 font-mono text-[10px] uppercase tracking-[0.3em] transition-opacity"
        style={{ opacity: indicatorOpacity }}
      >
        <div>Est. 2013 · Handcrafted · One of One</div>
        <div className="hidden md:flex items-center gap-2">
          Scroll
          <span className="inline-block w-px h-8 bg-white/40 animate-float" />
        </div>
      </div>
    </section>
  );
}

