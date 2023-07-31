// Место для первой задачи
function getTimeFromMinutes(time) {
    let hour = time/60;
    let remain = hour - Math.floor(hour);
    remain = Math.round(remain * 60);
    hour = Math.floor(hour);

    if (typeof(time) !== 'number' || hour < 0 || !Number.isInteger(time)) {
      return 'Ошибка, проверьте данные';
    } else if (hour == 1) {
      return `Это ${hour} час и ${remain} минут`;
    }  else if (hour == 2 || hour == 3 || hour == 4) {
      return `Это ${hour} часа и ${remain} минут`;
    } else {
      return `Это ${hour} часов и ${remain} минут`;
    }
}

console.log(getTimeFromMinutes(51)); 

// Место для второй задачи
function findMaxNumber(...args) {
  if (4 > args.length) {
    return 0;
  }

  for (const arg of args) {
    if (isNaN(arg) || typeof arg === 'string') {
      return 0;
    }
  }

  return Math.max(...args);
}

console.log(findMaxNumber(1, '0.5', 3, 4)); 


function fib(num) {
  let arr = [0, 1];
  let prev = 0;
  let current = 1;
  if (num == 0) return 0;
  if (num == 1) return 1;
  if (!Number.isInteger(num) || typeof(num) !=='number') {
      return '';
  } else {
      for (let i=2; i<num; i++) {
          const next = prev + current;
          arr.push(next);
          prev = current;
          current = next; 
          
      }
  }
  
  return arr.join(' ');
}

console.log(fib(7));
