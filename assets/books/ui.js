'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

// remove me before code-along
const onSignInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  $('#sign-in-success').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
  $('#sign-out-success').addClass('hidden')
  $('#play').removeClass('hidden')
}

const onSignInFail = (error) => {
  $('#sign-in-success').addClass('hidden')
  $('#sign-in-error').removeClass('hidden')
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  $('#sign-out-success').removeClass('hidden')
  $('#sign-in-success').addClass('hidden')
  $('.gameBoard').addClass('hidden')
  $('#reset').addClass('hidden')
  $('#play').addClass('hidden')
}

const changePasswordSuccess = () => {
  $('#change-pass-sucess').removeClass('hidden')
  $('#change-pass-fail').addClass('hidden')
}

const onChangePasswordFail = (error) => {
  $('#change-pass-success').addClass('hidden')
  $('#change-pass-fail').removeClass('hidden')
}

const onSignUpSuccess = (data) => {
  $('#sign-up-success').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
}

const onSignUpFail = (error) => {
  $('#sign-up-success').addClass('hidden')
  $('#sign-up-error').removeClass('hidden')
}

const onCreateGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
}

const onUpdateSuccess = function (data) {
  console.log(data)
}

// if game update fails
const onUpdateFail = function (error) {
  console.error(error)
}

module.exports = {
  onSignUpFail,
  onSignUpSuccess,
  onSignInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onSignInFail,
  onChangePasswordFail,
  onUpdateSuccess,
  onUpdateFail,
  onCreateGameSuccess
}
