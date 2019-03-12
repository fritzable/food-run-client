'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password-form').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.recipe-forms').show()
  $('form').trigger('reset')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#content').hide()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.recipe-forms').hide()
  $('#auth-forms').show()
  $('#sign-in').show()
  $('#sign-up').show()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
