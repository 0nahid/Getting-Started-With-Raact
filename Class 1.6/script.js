// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// actions identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// initial state
const initialState = {
    value: 0,
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
    } else {
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
    store.dispatch({
        type: INCREMENT, // mandatory
        payload: 5, // optional
    });
});
decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: DECREMENT, // mandatory
        payload: 2,
    });
});