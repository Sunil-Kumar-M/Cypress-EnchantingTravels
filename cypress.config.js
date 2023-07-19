const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.exodus.co.uk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/examples/*.js",
  },
});
