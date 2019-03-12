'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Recipe successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('All Recipes successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#content').html('')
  data.recipes.forEach(recipe => {
    const recipeHtml = (`
    <p>Recipe ID: ${recipe.id}</p>
    <p>Recipe Name: ${recipe.name}</p>
    <p>Ingredients: ${recipe.ingredients}</p>
    <p>Directions: ${recipe.directions}</p>
    <br>
    `)
    $('#content').append(recipeHtml)
  })
  console.log('onIndexSuccess ran. Data is :', data.recipes)
}

const onIndexFailure = function (error) {
  $('#message').text('Error on getting recipes')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('One Recipe successfully received')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error on getting recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Recipe successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Recipe successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('Recipe successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Recipe successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating recipe')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
