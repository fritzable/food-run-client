'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = function (event) {
  event.preventDefault()
  console.log('onCreateRecipe ran')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexRecipes = function (event) {
  event.preventDefault()
  console.log('onIndexRecipes ran')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

// const onShowRecipe = function (event) {
//   event.preventDefault()
//   console.log('onShowRecipe ran. Event is' + event)
//
//   const data = getFormFields(event.target)
//   const recipe = data.recipe
//   console.log('onShowRecipe ran. Data is:' + data)
//
//   if (recipe.id.length !== 0) {
//     api.show(recipe)
//       .then(ui.onShowSuccess)
//       .catch(ui.onShowFailure)
//   } else {
//     $('#message').html('<p>Please provide a recipe id</p>')
//     $('#message').css('background-color', 'red')
//     console.log('Please enter a recipe id')
//   }
// }

const onDeleteRecipe = function (event) {
  event.preventDefault()
  console.log('onDeleteRecipe ran')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.id.length !== 0) {
    api.destroy(recipe.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide a recipe id</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a recipe id')
  }
}

const onUpdateRecipe = function (event) {
  event.preventDefault()
  console.log('onUpdateRecipe ran')

  const data = getFormFields(event.target)
  const recipe = data.recipe

  if (recipe.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required')
    return false
  }
  if (recipe.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a recipe id</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a recipe id')
  }
}

const addHandlers = () => {
  $('#recipe-create').on('submit', onCreateRecipe)
  $('#recipe-index').on('submit', onIndexRecipes)
  // $('#recipe-show').on('submit', onShowRecipe)
  $('#recipe-delete').on('submit', onDeleteRecipe)
  $('#recipe-update').on('submit', onUpdateRecipe)
}

module.exports = {
  addHandlers
}
