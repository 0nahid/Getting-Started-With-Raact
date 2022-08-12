import React from 'react'

export default function Stats({ count }) {
    return (
        <div>
            <div class="max-w-md mx-auto mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div class="text-2xl font-semibold">Total Count: {count}</div>
                </div>
            </div>
        </div>
    )
}
