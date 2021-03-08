"use strict";

const randomMovieUrl = "https://api.rand.fun/movies/title";
const omdbUrl = "http://www.omdbapi.com/?apikey=8f63893f&t="


// The idea of this exercise is to get some random title form the
// `randomMovieUrl`, and later on get all related data from the
// omdbapi.

function addInfoToHTML(data) {
    let h1 = document.querySelector("#random-movie h1");
    h1.innerHTML = data.Title;

    let image = document.querySelector("#random-movie img");
    image.setAttribute("src", data.Poster);

    let description = document.querySelector("#random-movie .description");
    description.innerHTML = data.Plot;
}

fetch(randomMovieUrl)
    .then(response => response.json())
    .then(json => fetch(omdbUrl + json.result))
    .then(response => response.json())
    .then(json => addInfoToHTML(json))
    .catch(err => console.log(err))
