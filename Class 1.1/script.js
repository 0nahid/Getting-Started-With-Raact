// selecting the elements
const counterEl = document.querySelector('#counter');
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const counterEl2 = document.querySelector('#counter2');
const incrementEl2 = document.querySelector('#increment2');
const decrementEl2 = document.querySelector('#decrement2');

//  initial state
let count = 0;

incrementEl.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
});

decrementEl.addEventListener('click', () => {
    count--;
    counterEl.innerText = count;
});

let count2 = 0;

incrementEl2.addEventListener('click', () => {
    count2++;
    counterEl2.innerText = count2;
});

decrementEl2.addEventListener('click', () => {
    count2--;
    counterEl2.innerText = count2;
});
