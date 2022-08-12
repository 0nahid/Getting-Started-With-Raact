import { useState } from "react";
import Counter from "./Components/Counter";
import Stats from "./Components/Stats";

const initialState = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    }
]

export default function App() {
    const [state, setState] = useState(initialState)
    const totalCount = () => state.reduce((total, counter) => total + counter.count, 0);
    // const increment = () => setState(state.map(counter => ({ ...counter, count: counter.count + 1 })));
    // const decrement = () => setState(state.map(counter => ({ ...counter, count: counter.count - 1 })));
    const increment = (id) => setState(state.map(counter => counter.id === id ? { ...counter, count: counter.count + 1 } : counter));
    const decrement = (id) => setState(state.map(counter => counter.id === id ? { ...counter, count: counter.count - 1 } : counter));

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {state.map(counter => (
                    <Counter
                        key={counter.id}
                        id={counter.id}
                        count={counter.count}
                        increment={increment}
                        decrement={decrement}
                    />
                ))}
                <Stats count={totalCount()} />
            </div>
        </div>
    );
}
