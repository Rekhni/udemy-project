'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('Reha', 'Omir', 'Tima', 'Beks');


function calcOrDouble(number, basis=15) {
    console.log(number * basis);
}

calcOrDouble(2);



