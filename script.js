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
  
        if (meals) {
          const mealCards = meals.slice(0, 5).map(meal => createMealCard(meal));
          mealResultsContainer.innerHTML = mealCards.join('');
  
          if (meals.length > 5) {
            showAllSection.style.display = 'block';
          } else {
            showAllSection.style.display = 'none';
          }
  
          showAllButton.onclick = () => {
            const allMealCards = meals.map(meal => createMealCard(meal)).join('');
            mealResultsContainer.innerHTML = allMealCards;
            showAllSection.style.display = 'none';
          };
        } else {
          mealResultsContainer.innerHTML = '<p>No meals found. Please try another search.</p>';
          showAllSection.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  }
  
  function createMealCard(meal) {
    return `
      <div class="meal-card">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <p><strong>Meal ID:</strong> ${meal.idMeal}</p>
        <p><strong>Title:</strong> ${meal.strMeal}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions.slice(0, 100)}...</p>
      </div>
    `;
  }
  