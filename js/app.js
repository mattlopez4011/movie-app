
document.addEventListener("DOMContentLoaded", () => {


// API key
    const API_KEY = 'bc60faa44c7061b671ee155a3b9e8c3c';
// First part of url for image
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
// API Fetch Url
    const movieAPIUrl = 'https://api.themoviedb.org/3/search/movie?api_key=bc60faa44c7061b671ee155a3b9e8c3c';
// Loading icon
    const loadingScreen = document.querySelector('.loader');
// Selecting search button
    const searchButton = document.querySelector('#search');
// Selecting search bar input
    const searchInput = document.querySelector('#inputValue');
// Selecting movie div displaying movies container
    const searchedMovies = document.querySelector('#searched-movies');


    function movieSection(movies) {
        return movies.map((movie) => {
            if (movie.poster_path) { // Checking if movie poster is valid or null. Only disply posters that have a URL.
            return `<img class="posterImage" src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>`;
            }

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
    // data is coming from fetch
    function renderSearchMovies(data){
        // data.results []
        searchedMovies.innerHTML = ''; // Clears movies after each new movie search
        // console.log('Data: ', data);
        const movies = data.results; // returns results array from movie API
        const movieBlock = createMovieContainer(movies); // Returns movie div container
        searchedMovies.appendChild(movieBlock); // appends movie div to DOM
        console.log('Data from API: ', data);
        console.log("movies", movies);
        console.log("movieBlock inside fetch: ", movieBlock);
    }


// Event listener for search bar button
    searchButton.onclick = function (event) {
        event.preventDefault(); // Stop browser from reloading the page when the button is clicked.
        const searchValue = searchInput.value; // Users value
        // Movie api url with users input as the query
        const urlWithSearchValue = movieAPIUrl + '&query=' + searchValue;
        console.log('Search button has been clicked!!!');
        loadingScreen.style.display = 'block';// Show loading screen
        setTimeout(function(){

            // ====== Fetch request ======
            fetch(urlWithSearchValue)
                .then((data) => data.json())
                .then((data) => {
                    renderSearchMovies(data); // sends movie data to render HTML to send movie poster to DOM.
                    loadingScreen.style.display = 'none'; // Hide loading screen

                })
                .catch((error) => {
                    console.log('Error: ', error);
                });
        }, 1750);

        searchInput.value = ''; // Clears the search input after the search btn has been clicked.
        console.log("Search Value:", searchValue);

    };

//  Event listener, Fires when user clicks on a movie.
    document.onclick = function (event) {
        const target = event.target;
        if (target.className === 'posterImage'){
        console.log('Image was click');


        }

    }

}); // End of DOM content loaded event listener


