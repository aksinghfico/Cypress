const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   
        baseUrl:
      "https://www.exodus.co.uk/booking/passengers#!departureCode=TEJA241020_FI&adults=1&children=0&tripcode=TEJ",
  },
});
