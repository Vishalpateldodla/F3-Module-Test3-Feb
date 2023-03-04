// Retrieve search history from localStorage
const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

// Get reference to search history list element
const searchHistoryList = document.getElementById("search-history");

// Loop through search history and add each item to the list
for (let i = 0; i < searchHistory.length; i++) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = searchHistory[i];
  link.setAttribute("href", "searched.html?q=" + searchHistory[i]);
  listItem.appendChild(link);
  searchHistoryList.appendChild(listItem);
}

// Get reference to clear history button
const clearButton = document.getElementById("clear-history");

// Add click event listener to clear history button
clearButton.addEventListener("click", function() {
  // Remove search history from localStorage
  localStorage.removeItem("searchHistory");
  // Remove all items from search history list
  searchHistoryList.innerHTML = "";
});

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    window.location.href = './Searched Page.html';
});