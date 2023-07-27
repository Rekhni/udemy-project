const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfMovie = prompt('На сколько оцените его?', '')

personalMovieDB.movies[lastWatchedMovie] = ratingOfMovie;

console.log(personalMovieDB);

