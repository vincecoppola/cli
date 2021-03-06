'use strict'

const fs = require('fs')
const program = require('commander')

const Login = require('../lib/login')
const Utils = require('../lib/utils')

program
  .description('Choose a GitHub organization to use with Runnable.')
  .parse(process.argv)

Login.chooseOrg({})
  .then((org) => {
    fs.writeFileSync(
      Login.settingsFile,
      JSON.stringify({ organization: org })
    )
  })
  .catch(Utils.handleError)
