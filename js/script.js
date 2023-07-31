let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '').trim();

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '').trim();
  }
}

start();


const personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilms() {
  for (let i=0; i<2; i++) {
      const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
             ratingOfMovie = prompt('На сколько оцените его?', '').trim();

      if (lastWatchedMovie != null && ratingOfMovie != null && lastWatchedMovie != '' 
      && ratingOfMovie != '' && lastWatchedMovie.length < 50 && ratingOfMovie.length < 50) {
          personalMovieDB.movies[lastWatchedMovie] = ratingOfMovie;
          console.log('done');
      } else {
          console.log('error');
          i--;
      }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
  } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
  } else {
      console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
      let userGenre = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
      personalMovieDB.genres.push(userGenre);
  }
}

writeYourGenres();

function showMyDB(hidden) {
  if (!hidden) {
      console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);