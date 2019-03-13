'use strict'

const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const onCreateSuccess = function (data) {
  $('#message').text('Recipe successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onIndexSuccess = function (data) {
  $('#message').text('All Recipes successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#content').html('')
  const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('#content').html(showRecipesHtml)

  $('form').trigger('reset')
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting recipes')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

// const onShowSuccess = function (data) {
//   $('#message').text('One Recipe successfully received')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#content').html('')
//   data.recipes.forEach(recipe => {
//     const recipeHtml = (`
//     <p>Recipe ID: ${recipe.id}</p>
//     <p>Recipe Name: ${recipe.name}</p>
//     <p>Ingredients: ${recipe.ingredients}</p>
//     <p>Directions: ${recipe.directions}</p>
//     <br>
//     `)
//     $('#content').append(recipeHtml)
//   })
//   $('form').trigger('reset')
// }
//
// const onShowFailure = function (error) {
//   $('#message').text('Error on getting recipe')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   $('form').trigger('reset')
// }

const onDeleteSuccess = function () {
  $('#message').text('Recipe successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onDeleteFailure = function (error) {
  $('#message').text('Error on deleting recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').text('Recipe successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}


module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  // onShowSuccess,
  // onShowFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure
}
