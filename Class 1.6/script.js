// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const CounterDiv = document.getElementById("counter-div");
const CLoneDiv = document.getElementById("clone-div");

const addCounterBtn = document.getElementById("add-counter");
const removeCounterBtn = document.getElementById("remove-counter");

// copy CounterDiv to CLoneDiv and add it to the DOM
const addCounter = () => {
    const newCounterDiv = CounterDiv.cloneNode(true);
    CLoneDiv.appendChild(newCounterDiv);
}
addCounterBtn.addEventListener("click", addCounter);

// remove the full clone div
const removeCounter = () => {
    CLoneDiv.removeChild(CLoneDiv.lastChild);
}
removeCounterBtn.addEventListener("click", removeCounter);

// actions identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

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
const initialState = [
    {
        id: 1,
        value: 1,
    },
    {
        id: 2,
        value: 2,
    },
    {
        id: 3,
        value: 3,
    },
    {
        id: 4,
        value: 4
    }
];

// reducer
const counterReducer = (state = initialState, action) => {
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
    else if (action.type === "INTEST") {
        const updatedState = {
            ...state,
            properties: {
                ...state.properties,
                b: state.properties.b + 1
            }
        }
        return updatedState;
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
    store.dispatch(increment(1));
});
decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(1));
});