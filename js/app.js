
document.addEventListener("DOMContentLoaded", () => {


// API key
    const API_KEY = 'bc60faa44c7061b671ee155a3b9e8c3c';
// First part of url for image
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
// API Fetch Url
    const movieAPIUrl = 'https://api.themoviedb.org/3/search/movie?api_key=bc60faa44c7061b671ee155a3b9e8c3c';

// Selecting search button
    const searchButton = document.querySelector('#search');
// Selecting search bar input
    const searchInput = document.querySelector('#inputValue');
    // Selecting movie div displaying movies container
    const searchedMovies = document.querySelector('#searched-movies');

    function movieSection(movies) {
        return movies.map((movie) => {
            return `
                    <img class="posterImage" src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
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
                const movieBlock = createMovieContainer(movies); // Returns movie div container
                searchedMovies.appendChild(movieBlock);
                console.log("movieBlock inside fetch: ", movieBlock);

            })
            .catch((error) => {
                console.log('Error: ', error);
            });

        console.log("Search Value:", searchValue);



    };

    // export default {urlWithSearchValue}; // es6 shorthand EXPORTS
}); // End of DOM content loaded event listener


