// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
var app_config_default = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  vite: {
    plugins: [
      svgr(),
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ]
  }
});
export {
  app_config_default as default
};
