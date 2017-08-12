'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.onSignUpSuccess)
    .fail(ui.onSignUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onSignInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.onChangePasswordFail)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getSuccess)
    .catch(ui.fail)
  console.log(api.index())
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.fail)
}

const onUpdateGame = function (index, value, over) {
  api.updateGame(index, value, over)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetGames,
  onCreateGame,
  onUpdateGame
}
