const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.olx.in/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      dev:"http://google.com",
      staging:"http://cypress.io"
    }
  },
});
