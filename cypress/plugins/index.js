// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// promisified fs module
const fs = require('fs-extra')
const path = require('path')

async function getConfigurationByFile(file) {
  const pathBaseConfigFile = path.resolve(`cypress.json`)
  const pathEnvConfigFile = path.resolve('env', `${file}.json`)
  var baseJson = await fs.readJson(pathBaseConfigFile)
  var envJson = await fs.readJson(pathEnvConfigFile)
  var configJson = Object.assign(baseJson, envJson)
  return configJson
}

// plugins file
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'dev'

  return getConfigurationByFile(file)
}
//
// const cucumber = require('cypress-cucumber-preprocessor').default
//
// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber())
// }
//
// module.exports = (on, config) => {
//   on('before:browser:launch', (browser, launchOptions) => {
//     if (browser.family === 'chromium' && browser.name !== 'electron') {
//       // provide absolute path to unpacked extension's folder
//       launchOptions.extensions.push('/Users/jane/Dev/my-app/gleekbfjekiniecknbkamfmkohkpodhe')
//     }
//
//     return launchOptions
//   })
// }

