// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commandsCDT'
import './enums'
import './commands'
import './commands/index'
import './commands/mocks'
import './commands/actions/common/forms.js'
import './commands/actions/pages/informationBasic.js'
import './commands/actions/pages/home'
import './commands/actions/pages/pep'
import './commands/actions/pages/account'
import './commands/actions/pages/otp'
import './commands/actions/common/flow.js'
import addContext from "mochawesome/addContext";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
// Alternatively you can use CommonJS syntax:
require('cypress-plugin-tab')
require('cypress-xpath')

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshot = `../screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({test}, screenshot);
  }
});
