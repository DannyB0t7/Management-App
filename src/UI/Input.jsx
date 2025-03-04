import React from "react";

function Input({ label, type, ref, input }) {
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {input ? (
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mt-1"
          type={type}
          ref={ref}
        />
      ) : (
        <textarea
          ref={ref}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mt-1"
        ></textarea>
      )}
    </p>
  );
}

export default Input;
