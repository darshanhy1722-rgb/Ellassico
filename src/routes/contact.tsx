import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/whatsapp-fab";
import { ADDRESS_LINES, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SOCIAL_LINKS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ElClassico Designs™" },
      { name: "description", content: "Commission a bespoke resin piece. Share your project details with the ElClassico Designs™ studio and receive a personalised quote." },
      { property: "og:title", content: "Contact ElClassico Designs™" },
      { property: "og:description", content: "Commission a bespoke resin piece — share your project with our studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="pt-32 md:pt-40 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Custom Commissions</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mt-6 leading-[0.95] max-w-4xl">
            Begin Your Bespoke Commission
          </h1>
          <p className="text-muted text-lg mt-8 max-w-xl leading-relaxed">
            Share a few details about your space and vision. Our studio replies to every enquiry within two business days.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <aside className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Studio</h3>
              <address className="not-italic text-sm text-foreground leading-relaxed">
                ElClassico Designs™ Studio
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block text-muted">{line}</span>
                ))}
              </address>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm hover:text-accent">Get directions →</a>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Direct</h3>
              <p className="text-sm text-foreground"><a href="mailto:studio@elclassico.co" className="hover:text-accent">studio@elclassico.co</a></p>
              <p className="text-sm text-foreground mt-1"><a href={`tel:${PHONE_TEL}`} className="hover:text-accent">{PHONE_DISPLAY}</a></p>
              <p className="text-sm text-foreground mt-1"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp studio →</a></p>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Follow</h3>
              <ul className="space-y-1 text-sm text-foreground">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Lead Time</h3>
              <p className="text-sm text-muted leading-relaxed">Commissions typically span 6–12 weeks from approval, depending on scale and finish.</p>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10"
          >
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Budget (USD)" name="budget" placeholder="e.g. $5,000 — $15,000" />
            <div className="md:col-span-2">
              <Field label="Project Details" name="details" textarea required />
            </div>
            <div className="md:col-span-2 bg-background p-6">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-3">Reference Image (optional)</label>
              <input type="file" accept="image/*" className="text-xs text-muted file:mr-4 file:border-0 file:bg-foreground file:text-background file:px-4 file:py-2 file:text-[10px] file:font-bold file:uppercase file:tracking-widest hover:file:bg-accent" />
            </div>
            <div className="md:col-span-2 bg-background p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {sent ? (
                <p className="text-xs font-mono uppercase tracking-widest text-accent">✓ Enquiry received — we'll be in touch shortly.</p>
              ) : (
                <p className="text-xs text-muted">We reply within two business days.</p>
              )}
              <button type="submit" className="px-8 py-4 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 border-t border-foreground/5 text-center px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-3">Prefer to browse first?</p>
        <Link to="/" className="text-lg font-bold uppercase tracking-tight hover:text-accent transition-colors">
          Return to homepage →
        </Link>
      </section>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string;
}) {
  return (
    <label className="block bg-background p-6 focus-within:bg-surface transition-colors">
      <span className="block text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-3">
        {label}{required && <span className="text-accent"> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 border-b border-foreground/10 focus:border-accent outline-none py-2 text-sm resize-none transition-colors"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 border-b border-foreground/10 focus:border-accent outline-none py-2 text-sm transition-colors"
        />
      )}
    </label>
  );
}
