//MoviesPage

export const filterMovies = (searchString, dataGhibli) => {
  const search = searchString.trim().toLowerCase();
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
  const copy = [...data];
  if (order == "A-Z") {
    return copy.sort((a, z) => (a.title > z.title ? 1 : -1));
  }
  if (order == "Z-A") {
    return copy.sort((a, z) => (a.title > z.title ? -1 : 1));
  }
  if (order == "Highest-Score") {
    return copy.sort((a, z) =>
      Number(a.rt_score) > Number(z.rt_score) ? -1 : 1
    );
  }
  if (order == "Lowest-Score") {
    return copy.sort((a, z) =>
      Number(a.rt_score) > Number(z.rt_score) ? 1 : -1
    );
  }
  if (order == "Oldest") {
    return copy.sort((a, z) =>
      Number(a.release_date) > Number(z.release_date) ? 1 : -1
    );
  } else {
    return copy.sort((a, z) =>
      Number(a.release_date) > Number(z.release_date) ? -1 : 1
    );
  }
};

//CharactersPage

export const filterCharacters = (searchString, films) => {
  searchString = searchString.trim().toLowerCase();
  let resultCharacters = [];
  for (const film of films) {
    if (film.title.toLowerCase().includes(searchString)) {
      resultCharacters.push(...film.people);
    } else {
      const filterCharacters = film.people.filter((person) => {
        return person.name.toLowerCase().includes(searchString);
      });
      resultCharacters.push(...filterCharacters);
    }
  }
  return resultCharacters;
};

export function getCharacters(films) {
  const copy = [...films];
  const charactersAll = copy.map((film) => {
    return film.people;
  });

  const people = charactersAll.flat();
  return people;
}

export const alphabeticalSort = (data, order) => {
  const copy = [...data];
  if (order == "A-Z") {
    return copy.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return copy.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};

export const filterByGender = (data, item) => {
  const copy = [...data];
  const filteredByGender = copy.filter((film) => film.gender === item);
  return filteredByGender;
};

export const countItem = (selectedFilter) => {
  return selectedFilter.length;
};