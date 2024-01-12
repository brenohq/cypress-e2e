import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "dv4cug",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
