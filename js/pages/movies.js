import data from "../../data/ghibli/ghibli.js";
import { filterMovies, sortMovies, countItem } from "../data.js";
import { menu } from "../components/header.js";

menu();

document.getElementById("form").reset();

const moviesList = data.films;

function makeMovieCards(movies) {
  document.getElementById("movieCards").innerHTML = movies
    .map(
      (item) =>
        `
      <div class="cardsMoviesContainer">
        <picture class="posterMovie">
          <img src="${item.poster}" alt="" class="poster" />
        </picture>
        <div class="infoContainer">
          <div class="mainInfoAndRating">
            <div class="mainIfoContainer">
              <h3>${item.title}</h3>
              <h4>${item.release_date}</h4>

            </div>

            <div class="ratingContainer">
              <img src="../../assets/icon/star.svg" alt="star" class="star"/>
              <p>${item.rt_score}</p>
            </div>

          </div>
          <div class="directorProducer">
            <p><strong>Directed by:</strong> ${item.director}</p>
            <p><strong>Produced by:</strong> ${item.producer}</p>
           </div>
          <div class="synopsisContainer">
            <p><strong>Synopsis:</strong> ${item.description}</p>
          </div>
        </div>
      </div>
        `
    )
    .join("");
}

const result = document.getElementById("result");

function resultCalc(selectedFilter) {
  result.classList.add("resultContainer");
  const totalResults = countItem(selectedFilter);
  result.innerHTML = `
    <div class=result>
       ${totalResults} result${totalResults === 1 ? "" : "s"} found
    </div>
  `;
}

const inputSearch = document.getElementById("inputSearch");

inputSearch.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  console.log(searchString);
  const filteredMovies = filterMovies(searchString, moviesList);
  makeMovieCards(filteredMovies);
  resultCalc(filteredMovies);
});

const inputSelect = document.getElementById("inputSelect");

inputSelect.addEventListener("change", (e) => {
  const selectedOrder = e.target.value;
  const sortedMovies = sortMovies(moviesList, selectedOrder);
  makeMovieCards(sortedMovies);
});

makeMovieCards(moviesList);
