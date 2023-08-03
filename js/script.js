let numberOfFilms;






const personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '').trim();
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '').trim();
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
     }
  },


  showMyDB: function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
        // let userGenre = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
        // if (userGenre != null && userGenre != '') {
        //   personalMovieDB.genres.push(userGenre);
        //   console.log('done');
        // } else {
        //   console.log('error');
        //   i--;
        // }        

        let userGenres = prompt('Введите ваши любимые жанры через запятую').toLowerCase().trim();

        if (userGenres == null && userGenres === '') {
            console.log('error');
            i--;
        } else {
            personalMovieDB.genres = userGenres.split(', ');
            personalMovieDB.genres.sort()
            console.log('done');
        }   
    }
    personalMovieDB.genres.forEach((genre, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${genre}`);
    })
  }
}


const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let result = 0;

  data.shops.forEach((shop) => {
    result += shop.width * shop.length * data.height;
  })

  if (data.budget - (result * data.moneyPer1m3) >= 0) {
    console.log('Бюджета достаточно');
  } else {
    console.log('Бюджета недостаточно');
  }
};

isBudgetEnough(shoppingMallData);


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let res = [];
    for (let i = 0; i < arr.length; i += 3) {
      let group = arr.slice(i, i + 3);
      if (group.length == 1 || group.length == 2) {
        group = `Оставшиеся студенты: ${group.join(', ')}`;
      }
      res.push(group);
    }
    if (res.length == 3) {
      const noStud = 'Оставшиеся студенты: -';
      res.push(noStud);
    }


    return res;
}

console.log(sortStudentsByGroups(students));


