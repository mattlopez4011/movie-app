document.addEventListener("DOMContentLoaded", () => {


// API key
    const API_KEY = 'bc60faa44c7061b671ee155a3b9e8c3c';
// API Fetch Url
    const movieAPIUrl = 'https://api.themoviedb.org/3/search/movie?api_key=bc60faa44c7061b671ee155a3b9e8c3c';

// Selecting search button
    const searchButton = document.querySelector('#search');
// Selecting search bar input
    const searchInput = document.querySelector('#inputValue');

    function movieSection(movie) {
        return movies.map((movie) => {
            return `
                    <img src=${movie.poster_path} data-movie-id=${movie.id}/ alt="">
            `;

        })

    }

//======== Add movie to DOM
    function createMovieContainer(movies) {
        const movieElement = document.createElement('div');
        movieElement.setAttribute('class', 'movie');  // Sets the class for movieElement

        const movieTemplate = `
        <section class="section">
            ${movieSection(movies)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>   
    `;

        movieElement.innerHTML = movieTemplate;
        return movieElement;
    }


// Event listener for search bar button
    searchButton.onclick = function (event) {
        event.preventDefault(); // Stop browser from reloading the page when the button is clicked.
        const searchValue = searchInput.value; // Users value
        // Movie api url with users input as the query
        const urlWithSearchValue = movieAPIUrl + '&query=' + searchValue;
        console.log('Search button has been clicked!!!');

        // ====== Fetch request ======

        fetch(urlWithSearchValue)
            .then((data) => data.json())
            .then((data) => {
                // console.log('Data: ', data);
                const movies = data.results;
                console.log("movies", movies);
                const movieBlock = createMovieContainer(movies); // Returns movie block
                console.log("movieBlock", movieBlock);
            })
            .catch((error) => {
                console.log('Error: ', error);
            });

        console.log("Search Value:", searchValue);
    };




}); // End of DOM content loaded event listener


