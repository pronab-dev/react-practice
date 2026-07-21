import { useState } from "react";

export default function Counter() {
  console.log("page rendered");
  const [count, setCount] = useState(0);
  const handleCounter = (type) => {
    if (type === "+") {
      setCount((prev) => prev + 1);
    } else if (type === "-") {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-96 bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Counter App</h1>

        <div className="text-center">
          <h2 className={`text-6xl font-bold text-blue-600`}>
            {count === 0 ? "Zero" : count}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-10">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
            type="button"
            onClick={() => handleCounter("+")}
          >
            +
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
            type="button"
            onClick={() => handleCounter("-")}
          >
            -
          </button>
        </div>

        <button
          className="w-full mt-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
          type="button"
          disabled={!count}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
