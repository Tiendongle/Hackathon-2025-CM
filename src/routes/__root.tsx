import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { NotFound } from "~/components/NotFound/NotFound";
import { BottomNav } from "~/components/Elements/BottomNav";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";

import { bottomAppBar } from "~/data";
import { seo } from "~/utils/seo";

import appCss from "~/styles/app.css?url";
import GlobalHeader from "~/components/Organisms/GlobalHeader/GlobalHeader";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "RequestMe!",
        description: `Learn. Mentor. Browse. Teach. Bringing new skills to you and others.`,
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <RootDocument>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </RootDocument>
  );
}

const pathsWithHeader = [
  { pathName: "/", header: "Home" },
  { pathName: "/requests/learn", header: "Requests" },
  { pathName: "requests/mentor", header: "Requests" },
];

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathname = location.pathname;
  const headerDetails = pathsWithHeader.find(
    (path) => path.pathName === pathname
  );

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="max-w-[550px] mx-auto bg-neutral-100">
        {headerDetails && <GlobalHeader headerDetails={headerDetails} />}
        {children}
        <footer className="sticky bottom-0 w-full px-2 bg-white text-black z-10">
          <BottomNav elements={bottomAppBar} />
        </footer>
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}
