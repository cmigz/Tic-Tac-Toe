'use strict'
// Previous app Path - ../scripts/app
const app = require('../scripts/app.js')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const index = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATHCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  createGame,
  updateGame
}
