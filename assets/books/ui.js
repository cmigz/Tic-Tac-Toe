'use strict'
// remove signIn and signOut
const app = require('../scripts/app.js')

// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
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
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
