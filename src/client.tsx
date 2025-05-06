/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { createRouter } from "./router";

// if (import.meta.env.DEV) {
// Import and start Mirage in dev mode
import("./mirage/server").then(({ makeServer }) => {
  makeServer();
});
// }

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
