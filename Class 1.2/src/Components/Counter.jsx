import Button from "../Button";
import Count from "./Count";

export default function Counter({ id, count, increment, decrement }) {
    return (
        <>
            <div class="max-w-md mx-auto mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <Count count={count} />
                    <div class="flex space-x-3">
                        <Button label="Increment" handler={()=>increment(id)} />
                        <Button label="Decrement" handler={() => decrement(id)} />
                    </div>
                </div>
            </div>
        </>
    )
}
