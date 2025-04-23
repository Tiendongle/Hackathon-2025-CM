import React from "react";

import type { Decorator, Preview } from "@storybook/react";
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

// Add TanStack Router for Storybook
// https://github.com/TanStack/router/discussions/952#discussioncomment-12689425
export const RouterDecorator: Decorator = (Story) => {
  const rootRoute = createRootRoute({
    component: () => <Story />,
  });

  const routeTree = rootRoute;
  const router = createRouter({
    routeTree,
  });

  return <RouterProvider router={router} />;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: RouterDecorator,
};

export default preview;
