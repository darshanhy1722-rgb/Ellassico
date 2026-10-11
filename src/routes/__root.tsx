import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">404 — Not Found</div>
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Off the map</h1>
        <p className="text-sm text-muted mb-8">
          The page you're looking for has been moved or never existed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">Something went wrong</div>
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-4">Please try again</h1>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-foreground text-background px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-foreground/20 px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ElClassico Designs™ — Luxury Handcrafted Resin Art" },
      { name: "description", content: "Bespoke resin river tables, wall art and objects for luxury interiors. Every piece one of one — crafted with passion, finished with perfection." },
      { name: "author", content: "ElClassico Designs™" },
      { name: "application-name", content: "ElClassico Designs™" },
      { name: "apple-mobile-web-app-title", content: "ElClassico Designs™" },
      { name: "theme-color", content: "#eed6b7" },
      { property: "og:site_name", content: "ElClassico Designs™" },
      { property: "og:title", content: "ElClassico Designs™ — Luxury Handcrafted Resin Art" },
      { property: "og:image", content: `${SITE_URL}/elclassico-logo.jpg` },
      { property: "og:description", content: "Bespoke resin river tables, wall art and objects for luxury interiors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ElClassico Designs™",
            alternateName: ["ElClassico Designs", "Elclassico"],
            url: `${SITE_URL}/`,
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ElClassico Designs™",
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/elclassico-logo.jpg`,
          },
        ]),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
