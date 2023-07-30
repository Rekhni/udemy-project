const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

console.log(numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i=0; i<2; i++) {
    const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
           ratingOfMovie = prompt('На сколько оцените его?', '');

    if (lastWatchedMovie != null && ratingOfMovie != null && lastWatchedMovie != '' 
    && ratingOfMovie != '' && lastWatchedMovie.length < 50 && ratingOfMovie.length < 50) {
        personalMovieDB.movies[lastWatchedMovie] = ratingOfMovie;
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

// for (let i = 0; i <= lines; i++) {
    
//     for (let j = 0; j <= i*2; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);