//import { defineConfig } from 'cypress'
const { defineConfig } = require("cypress"); 
const allureWriter = require("@shelex/cypress-allure-plugin/writer"); 
 
module.exports = defineConfig({ 
  e2e: { 
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}", 
    //baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    baseUrl: "https://api.realworld.io", 
    setupNodeEvents(on, config) { 
      allureWriter(on, config); 
      return config; 
    }, 
    env: { 
      allureReuseAfterSpec: true, 
      download_dir: "./cypress/downloads", 
      allure: true, 
      allureResulsPath: "allure-results", 
    }, 
 
    videosFolder: "allure-results/", 
    screenshotOnRunFailure: true, 
    snapshotOnly: true
  }, 
});


