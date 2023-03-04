// Select the search form and input field
const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('input[type="text"]');

// Handle form submit event
searchForm.addEventListener('submit', e => {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the search query from the input field
    const query = searchInput.value;

    // Clear the input field
    searchInput.value = '';

    // Redirect the user to the search results page
    window.location.href = `searched.html?q=${encodeURIComponent(query)}`;
});

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    window.location.href = './Landing Page - After Searching.html';
});