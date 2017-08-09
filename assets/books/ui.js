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
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const onSignUpSuccess = (data) => {
  $('#sign-up-success').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
}

const onSignUpFail = (error) => {
  $('#sign-up-success').addClass('hidden')
  $('#sign-up-error').removeClass('hidden')
}

module.exports = {
  onSignUpFail,
  onSignUpSuccess,
  onSignInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onSignInFail
}
