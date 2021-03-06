'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexRecipes = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// const onShowRecipe = function (event) {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   const recipe = data.recipe
//
//   if (recipe.id.length !== 0) {
//     api.show(recipe)
//       .then(ui.onShowSuccess)
//       .catch(ui.onShowFailure)
//   } else {
//     $('#message').html('<p>Please provide a recipe id</p>')
//     $('#message').css('background-color', 'red')
//   }
// }

const onDeleteRecipe = function (event) {
  event.preventDefault()
  const recipeId = $(event.target).data('id')
  if (recipeId.length !== 0) {
    api.destroy(recipeId)
      .then(function () {
        ui.onDeleteSuccess(event)
        onIndexRecipes(event)
      })
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide a recipe id</p>')
    $('#message').css('background-color', 'red')
  }
}

const onUpdateRecipe = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    $('form').trigger('reset') // This reset should be left out, but needed for MVP
    return false
  }
  if (recipe.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a recipe id</p>')
    $('#message').css('background-color', 'red')
    $('form').trigger('reset') // This reset should be left out, but needed for MVP
  }
}

const addHandlers = () => {
  $('#recipe-create').on('submit', onCreateRecipe)
  $('#recipe-index').on('submit', onIndexRecipes)
  // $('#recipe-show').on('submit', onShowRecipe)
  $('#content').on('click', '#recipe-delete', onDeleteRecipe)
  $('#recipe-update').on('submit', onUpdateRecipe)
}

module.exports = {
  addHandlers
}
