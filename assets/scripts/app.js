'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authApi = require('./auth/api.js')
const authEvents = require('./auth/events.js')
const recipesEvents = require('./recipes/events.js')

$(() => {
  authApi.examples()
  authEvents.addHandlers()
  recipesEvents.addHandlers()
  $('.recipe-forms').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
})
