// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

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
const initialState = {
    value: 0,
    properties: {
        a: 2,
        b: 3
    }
}

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