import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Home, Globe, Briefcase, Phone } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-16">
      <div className="max-w-lg text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
          <span className="text-4xl font-extrabold">404</span>
        </div>
        <h1 className="text-3xl font-extrabold text-foreground mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Start from one of the quick links below.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          {[
            { to: "/" as const,          label: "Home",         Icon: Home,     desc: "Back to the homepage"       },
            { to: "/countries" as const, label: "Countries",    Icon: Globe,    desc: "Explore study destinations" },
            { to: "/services" as const,  label: "Services",     Icon: Briefcase,desc: "What we offer"              },
            { to: "/contact" as const,   label: "Contact Us",   Icon: Phone,    desc: "Speak to a counsellor"      },
          ].map(({ to, label, Icon, desc }) => (
            <Link key={label} to={to}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-card transition-all group">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <div className="font-semibold text-foreground text-sm">{label}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Need help?{" "}
          <a href="https://wa.me/9779856082953" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Learnovate — Int'l Education Consultant, Pokhara Nepal" },
      { name: "description", content: "ECAN-registered consultancy in Pokhara helping Nepali students with IELTS, PTE, university placements, scholarships and visa assistance — UK, Australia, Canada, USA, Japan and more." },
      { name: "author", content: "Learnovate International Education Consultant" },
      { property: "og:title", content: "Learnovate — Int'l Education Consultant, Pokhara" },
      { property: "og:description", content: "ECAN-registered study-abroad consultancy in Pokhara. Expert counselling for UK, Australia, Canada, USA, New Zealand, Japan and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@LearnovateNP" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&family=Great+Vibes&family=Caveat:wght@600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
