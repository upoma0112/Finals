document.getElementById('search-button').addEventListener('click', () => {
    const searchText = document.getElementById('search-input').value.trim();
    if (searchText) {
      searchMeals(searchText);
    }
  });

  function searchMeals(query) {
    const mealResultsContainer = document.getElementById('meal-results');
    const showAllSection = document.getElementById('show-all-section');
    const showAllButton = document.getElementById('show-all-button');
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;
        mealResultsContainer.innerHTML = '';