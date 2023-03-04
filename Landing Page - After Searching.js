// Select the search form and input field
const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.querySelector('input[type="text"]');

// Get the search query from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('q');

// Display the search query in a heading
const searchQueryHeading = document.querySelector('#search-query');
searchQueryHeading.textContent = `Search Results for "${query}"`;

// Retrieve the search results from the API
fetch(`https://www.googleapis.com/books/v1/volumes?q=percy+jackson`)
    .then(response => response.json())
    .then(data => {
        const searchResults = document.querySelector('#search-results');
        searchResults.innerHTML = '';

        // Loop through the search results and display them on the page
        data.items.forEach(item => {
            const book = document.createElement('div');
            book.classList.add('book');

            const title = document.createElement('h2');
            title.textContent = item.volumeInfo.title;
            book.appendChild(title);

            if (item.volumeInfo.authors) {
                const authors = document.createElement('p');
                authors.textContent = `By ${item.volumeInfo.authors.join(', ')}`;
                book.appendChild(authors);
            }

            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) {
                const thumbnail = document.createElement('img');
                thumbnail.src = item.volumeInfo.imageLinks.thumbnail;
                book.appendChild(thumbnail);
            }

            if (item.volumeInfo.description) {
                const description = document.createElement('p');
                description.textContent = item.volumeInfo.description;
                book.appendChild(description);
            }

            searchResults.appendChild(book);
        });
    })
    .catch(error => {
        console.error(error);
        const searchResults = document.querySelector('#search-results');
        searchResults.innerHTML = '<p>There was an error retrieving search results. Please try again later.</p>';
    });

// Handle form submit event
searchForm.addEventListener('submit', e => {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the new search query from the input field
    const newQuery = searchInput.value;

    // Clear the input field
    searchInput.value = '';

    // Redirect the user to the new search results page
    window.location.href = `searched.html?q=${encodeURIComponent(newQuery)}`;
});

// Handle "Back to Search" link click event
const backToSearchLink = document.querySelector('#back-to-search a');
backToSearchLink.addEventListener('click', e => {
    e.preventDefault();

    // Redirect the user back to the search page
    window.location.href = 'landing page.html';
});

const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => {
    window.location.href = './History Page.html';
});