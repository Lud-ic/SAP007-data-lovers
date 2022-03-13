import data from "../../data/ghibli/ghibli.js";
import { menu } from "../components/header.js";
import {
  filterCharacters,
  getCharacters,
  alphabeticalSort,
  filterByGender,
  countItem,
} from "../data.js";

menu();

document.getElementById("form").reset();

const charactersAll = getCharacters(data.films);

console.log(charactersAll, "charactersAll");

function makeCharacterCards(people) {
  document.getElementById("characterCards").innerHTML = people
    .map(
      (character) =>
        `
          <div class="characterCard">
            <section class="card-front card-border">
              <img src="${character.img}"/>
              <h3>${character.name}</h3>
            </section>
            <section class="card-back card-border">
              <h3>${character.name}</h3>
              <p>Gender: ${character.gender}</p>
              <p>Age: ${character.age}</p>
              <p>Eye-color: ${character.eye_color}</p>
              <p>Hair-color: ${character.hair_color}</p>
              <p>Species: ${character.specie}</p>
            </section>
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
  const searchTitle = e.target.value;
  const dataFiltered = filterCharacters(searchTitle, data.films);
  makeCharacterCards(dataFiltered);
  resultCalc(dataFiltered);
});

const inputSelect = document.getElementById("alphabeticalSelect");

inputSelect.addEventListener("change", (e) => {
  const selectedOrder = e.target.value;
  const sortedCharacters = alphabeticalSort(charactersAll, selectedOrder);
  makeCharacterCards(sortedCharacters);
});

const selectGender = document.getElementById("selectGender");

selectGender.addEventListener("change", (e) => {
  const selectedGender = e.target.value;
  const filteredGender = filterByGender(charactersAll, selectedGender);
  console.log(filteredGender, "Gender");
  makeCharacterCards(filteredGender);
  resultCalc(filteredGender);
});

console.log(charactersAll);
makeCharacterCards(charactersAll);
