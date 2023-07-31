function first() {

  setTimeout(() => {
    console.log(1);
  }, 2000);
};

function second() {
  console.log(2);
}

first();
second();


function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log('Я закончил курс!');
}

learnJS('JavaScript', done);