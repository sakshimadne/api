async function getCategoriesData() {
  console.log('Fetching category data...')
  const categoryUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  try {
    const response = await fetch(categoryUrl)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    console.log('Category Data:', data)
  } catch (error) {
    console.log('something went wrong')
  }
}

async function getIngredientData() {
  console.log('Fetching ingredient data...')
  const ingredientUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
  try {
    const response = await fetch(ingredientUrl)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    console.log('Ingredient Data:', data)
  } catch (error) {
    console.log('something went wrong')
  }
}

// Attach event listeners to the buttons
document
  .getElementById('get-category-data')
  .addEventListener('click', getCategoriesData)
document
  .getElementById('get-ingredient-data')
  .addEventListener('click', getIngredientData)
