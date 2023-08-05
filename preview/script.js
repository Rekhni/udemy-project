const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.addEventListener('click', () => {
//     console.log('click');
// });

// btn.addEventListener('click', () => {
//     console.log('second click');
// })




let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
    // console.log('Hover');
}

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
})

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
 
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
})