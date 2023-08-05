// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');


// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');

// div.classList.add('black');

// // wrapper.prepend(div);
// wrapper.append(div);

// // hearts[0].before(div);
// // hearts[0].after(div);

// // circles[0].remove();

// // wrapper.insertBefore(div, hearts[2]);

// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]); 
// // wrapper.replaceChild(circles[0], hearts[0])

// div.innerHTML = '<h1>Hello World!</h1>';

// // div.textContent = 'Hello'; 

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");


// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement.parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }

    console.log(node);
}