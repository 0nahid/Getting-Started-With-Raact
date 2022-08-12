import React from 'react';

export default function Button({ label, handler }) {
    return (
        <>
            <button
                class="bg-red-400 text-white px-3 py-2 rounded shadow"
                onClick={handler}
            >
                {label}
            </button>
        </>
    );
}
