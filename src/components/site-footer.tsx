import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-foreground/5 bg-background">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 max-w-sm">
          <div className="text-2xl font-black uppercase tracking-tighter mb-4"><BrandLogo markClassName="h-12 w-12" /></div>
          <p className="text-muted text-sm leading-relaxed">
            Crafted with passion. Finished with perfection. Luxury resin artistry for the modern aesthete — commissioned worldwide.
          </p>
          <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted">
            Studio · By appointment only
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-6">Navigation</h5>
          <ul className="space-y-4 text-xs font-medium uppercase tracking-wider">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Custom Orders</Link></li>
            <li><Link to="/dashboard" className="hover:text-accent transition-colors">Studio</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-6">Connect</h5>
          <ul className="space-y-4 text-xs font-medium uppercase tracking-wider">
            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
            <li><a href="mailto:studio@elclassico.co" className="hover:text-accent transition-colors">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[10px] text-muted font-mono uppercase tracking-widest">© {new Date().getFullYear()} ElClassico Designs™ — Bespoke Artistry</div>
        <div className="text-[10px] text-muted font-mono uppercase tracking-widest">Made in Limited Editions</div>
      </div>
    </footer>
  );
}
