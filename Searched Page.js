// Get query parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("q");

// Get reference to book details element
const bookDetails = document.getElementById("book-details");

// Fetch book data from API
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
    // Display error message if book data could not be retrieved
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Sorry, there was an error retrieving book data.";
    bookDetails.appendChild(errorMessage);
    console.error(error);
  });

// Get reference to back button
const backButton = document.getElementById("back-button");

// Add click event listener to back button
backButton.addEventListener("click", function() {
  // Navigate back to landing page
  window.location.href = "index.html";
});


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