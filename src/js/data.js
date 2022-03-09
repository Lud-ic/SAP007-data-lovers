// import dataGhibli from "../data/ghibli/ghibli.js";
// import { renderScreen } from "../js/pages/movies.js";
// import { makeCharacterCards } from "../js/pages/characters.js";

// console.log(dataGhibli);

//MoviesPage

export const filterMovies = (searchString, dataGhibli) => {
  const search = searchString.toLowerCase();
  const data = dataGhibli.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search) ||
      movie.producer.toLowerCase().includes(search) ||
      movie.director.toLowerCase().includes(search)
    );
  });

  return data;
};



export const sortMovies = (data, order) => {
  if (order == "A-Z") {
    return data.sort((a, z) => (a.title > z.title ? 1 : -1));
  }
  if (order == "Z-A") {
    return data.sort((a, z) => (a.title > z.title ? -1 : 1));
  }
  if (order == "Highest-Score") {
      Number(a.rt_score) > Number(z.rt_score) ? -1 : 1
    );
  }
  if (order == "Lowest-Score") {
      Number(a.rt_score) > Number(z.rt_score) ? 1 : -1
    );
  }
  if (order == "Oldest") {
    return data.sort((a, z) => (a.release_date > z.release_date ? 1 : -1));
  }
  if (order == "Newest") {
    return data.sort((a, z) => (a.release_date > z.release_date ? -1 : 1));
  }
};

//CharactersPage

export const filterCharacters = (searchTitle, films) => {
  const search = searchTitle.toLowerCase();
  const filteredfilms = films.filter((film) => {
    return film.title.toLowerCase().includes(search);
  });
  const characters = getCharacters(filteredfilms);
  // console.log(data, "characters");
  console.log(characters, "characters");
  return characters;
  // makeCharacterCards(data);
};

export function getCharacters(films) {
  const charactersAll = films.map((film) => {
    return film.people;
  });

  const people = charactersAll.flat();
  return people;
}

export const alphabeticalSort = (data, order) => {
  if (order == "A-Z") {
    return data.sort((a, z) => (a.name > z.name ? 1 : -1));
  }
  if (order == "Z-A") {
    return data.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const filterByGender = (data, item) => {
  const filteredByGender = data.filter((film) => film.gender === item);
  return filteredByGender;
};
