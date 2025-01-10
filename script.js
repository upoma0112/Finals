document.getElementById('search-button').addEventListener('click', () => {
    const searchText = document.getElementById('search-input').value.trim();
    if (searchText) {
      searchMeals(searchText);
    }
  });