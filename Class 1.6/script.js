// select dom elements
const counterEl = document.getElementById("counter-0");
const CloneDivEl = document.getElementById("clone-div");
const addCounterBtn = document.getElementById("add-counter");
const removeCounterBtn = document.getElementById("remove-counter");
const inputNumber = document.getElementById("input-number");

let index = 1;
let inputValue = 1;
const incrementEl = document.getElementById(`increment-${index - 1}`);
const decrementEl = document.getElementById(`decrement-${index - 1}`);


inputNumber.addEventListener("change", (e) => {
    inputValue = e.target.value;
    console.log(inputValue);
    if (inputValue < 0) {
        alert("Please enter a positive number");
    }
});


addCounterBtn.addEventListener("click", () => {
    CloneDivEl.innerHTML += `
    <div id="counter-div"
        class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mt-2">
        <h2 class="">Counter ${index}</h2>
        <div class="text-2xl font-semibold" id="counter-${index}">0</div>
        <div class="flex space-x-1">
        <input class="placeholder-shown:border-gray-500 ring ring-2 rounded px-2" type="number" name="" id="input-number-${index}" placeholder="1">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id="increment-${index}">
                Increment
            </button>
          <button class="bg-red-400 text-white px-3 py-2 rounded shadow"  id="decrement-${index}">
            Decrement
          </button>
        </div>
      </div>
    `;
    index++;
})


// actions identifiers
const INCREMENT = `increment-${index - 1}`;
const DECREMENT = `decrement-${index - 1}`;

// actions creators
const increment = (payload) => ({
    type: INCREMENT,
    payload: payload
});

const decrement = (payload) => ({
    type: DECREMENT,
    payload: payload
});


// initial state
const initialState = {
    value: 0,
}

// reducer
const counterReducer = (state = initialState, action) => {
    console.log(action);
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    }
    else {
        return state;
    }
}

// store
const store = Redux.createStore(counterReducer);

// subscribe to store changes
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString()
}
// update the ui initaly
render();

store.subscribe(render);


// button click handlers
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(parseInt(inputValue) || 1));
});
decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(parseInt(inputValue) || 1));
});