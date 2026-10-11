import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Studio Dashboard — ElClassico Designs™" },
      { name: "description", content: "Internal atelier dashboard for ElClassico Designs™ commissions, gallery and enquiries." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

const stats = [
  { label: "Total Orders", value: "128", delta: "+12 this month", tone: "text-accent" },
  { label: "Pending", value: "14", delta: "3 awaiting approval", tone: "text-gold" },
  { label: "Completed", value: "114", delta: "98% on-time", tone: "text-accent" },
  { label: "Revenue MTD", value: "₹6.8L", delta: "+18% vs last", tone: "text-accent" },
];

const enquiries = [
  { name: "Sofia Almeida", type: "River Table", budget: "₹6.5L", status: "New" },
  { name: "Hiroshi Tanaka", type: "Wall Panel", budget: "₹2.6L", status: "Quoted" },
  { name: "Elena Petrov", type: "Coffee Table", budget: "₹4.5L", status: "In Design" },
  { name: "Marcus Klein", type: "Corporate Gift x50", budget: "₹10L", status: "Crafting" },
  { name: "Aisha Malik", type: "Wedding Board", budget: "₹1.2L", status: "Delivered" },
];

const chart = [42, 55, 48, 62, 71, 65, 78, 82, 74, 88, 92, 84];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Top bar */}
      <header className="border-b border-white/5 px-6 h-16 flex items-center justify-between sticky top-0 bg-[#0d0d0d]/80 backdrop-blur-xl z-40">
        <div className="flex items-center gap-8">
          <Link to="/" aria-label="ElClassico Designs™ — Home" className="text-lg font-extrabold uppercase tracking-tighter"><BrandLogo markClassName="h-8 w-8" /></Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Studio Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white">← Back to site</Link>
          <div className="size-9 rounded-full bg-accent grid place-items-center text-[10px] font-bold uppercase tracking-widest">EC</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <nav className="border-r border-white/5 p-6 space-y-1 hidden lg:block">
          {["Overview", "Orders", "Products", "Gallery Manager", "Enquiries", "Quote Requests", "Analytics", "Messages"].map((item, i) => (
            <button key={item} className={["w-full text-left px-3 py-2.5 text-xs font-medium uppercase tracking-widest rounded-sm transition-colors", i === 0 ? "bg-white/5 text-white" : "text-white/50 hover:text-white hover:bg-white/5"].join(" ")}>
              {item}
            </button>
          ))}
        </nav>

        {/* Main */}
        <main className="p-6 md:p-10 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Overview</span>
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-2">Studio at a Glance</h1>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Last updated · Just now</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/[0.03] border border-white/5 p-6 hover:border-accent/40 transition-colors">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">{s.label}</div>
                <div className="text-3xl font-black">{s.value}</div>
                <div className={["text-[10px] font-mono uppercase tracking-widest mt-3", s.tone].join(" ")}>{s.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart + Enquiries */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl bg-white/[0.03] border border-white/5 p-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Sales Overview</div>
                  <div className="text-2xl font-black">Trailing 12 months</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">+22.4%</div>
              </div>
              <div className="flex items-end gap-2 h-48">
                {chart.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full rounded-t-sm bg-gradient-to-t from-accent to-accent/40 hover:from-accent hover:to-accent transition-all" style={{ height: `${v}%` }} />
                    <span className="font-mono text-[9px] text-white/30 uppercase">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">Recent Messages</div>
              <ul className="space-y-4">
                {enquiries.slice(0, 4).map((e) => (
                  <li key={e.name} className="flex items-center gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="size-8 rounded-full bg-white/10 grid place-items-center text-[10px] font-bold">{e.name.split(" ").map(w => w[0]).join("")}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">{e.name}</div>
                      <div className="text-[10px] text-white/40 truncate">{e.type}</div>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent">{e.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Customer Enquiries</div>
                <div className="text-xl font-black">All Active Requests</div>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest bg-accent px-4 py-2 hover:brightness-110 transition">Export</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/5">
                  <th className="text-left px-6 py-3">Client</th>
                  <th className="text-left px-6 py-3">Type</th>
                  <th className="text-left px-6 py-3">Budget</th>
                  <th className="text-left px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e) => (
                  <tr key={e.name} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium">{e.name}</td>
                    <td className="px-6 py-4 text-white/60">{e.type}</td>
                    <td className="px-6 py-4 font-mono text-xs">{e.budget}</td>
                    <td className="px-6 py-4"><span className="font-mono text-[10px] uppercase tracking-widest text-accent">{e.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
