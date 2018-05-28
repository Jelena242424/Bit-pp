"use strict"


const dataMovie = (function () {

    const data = {
        movieList: []
    }

    class MakeMovie {
        constructor(title, duration, genre) {
            this.title = title;
            this.duration = duration;
            this.genre = genre;
        }

        getData() {
            return `${this.title} ${this.duration} ${this.genre}`;
        }
    }




    const addMovie = ({ title, duration, genre }) => {
        const movie = new MakeMovie(title, duration, genre);
        data.movieList.push(movie);
        return movie;
    }



    return {
        addMovie
    }

})();

const uiMovie = (function () {


    return {

        getFormData() {
            const titleElement = document.querySelector(".movie-title");
            const lengthElement = document.querySelector(".movie-length");
            const genreElement = document.querySelector(".movie-genre");

            const title = titleElement.value;
            const duration = parseInt(lengthElement.value);
            const genre = genreElement.value;

            const formInputData = {
                title,
                duration,
                genre
            };

            return formInputData;
        },

        showMovieData(movie) {
            const movieListElement = document.querySelector(".movie-list");
            movieListElement.innerHTML += `${movie.getData()} </br>`;
        }
    }

})();

const mainMovie = (function (data, ui) {
    console.log(ui);
    document.querySelector(".add-movie").addEventListener("click", event => {
        const uiData = ui.getFormData();
        const movie = data.addMovie(uiData);
        ui.showMovieData(movie);
    })

})(dataMovie, uiMovie);

