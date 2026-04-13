import React, { useState } from "react";

function Score() {
  const [val, setVal] = useState(0);
  const [elem, setElem] = useState({ name: "React", isBanned: true });
  const [num, setNum] = useState([1, 2]);
  const [obj, setObj] = useState([
    { name: "xyz", age: 20 },
    { name: "abc", age: 25 },
    { name: "pqrs", age: 30 },
  ]);

  return (
    <>
      <div className="bg-zinc-300 p-5 text-center">
        {obj.map((item) => (
          <div>
            <h1>name : {item.name}</h1>
            <h2>age : {item.age}</h2>
          </div>
        ))}
        <button
          onClick={() =>
            setObj(() =>
              obj.map((item) =>
                item.name === "pqrs" ? { name: "pqrs", age: 1 } : item,
              ),
            )
          }
          className="bg-yellow-500 text-red-800 text-sm font-bold rounded-full py-1 px-7 mt-5"
        >
          Set
        </button>
        <button
          onClick={() =>
            setObj(() =>
              obj.map((item) =>
                item.name === "pqrs" ? { name: "pqrs", age: 30 } : item,
              ),
            )
          }
          className="bg-red-500 text-yellow-300 font-bold rounded-full px-4 py-1 text-sm ml-5"
        >
          Reset
        </button>
      </div>
      <div className="p-5 text-center bg-slate-200">
        <h1 className="text-center mb-2 bg-red-200">{val}</h1>
        <button
          onClick={() => setVal((prev) => prev - 1)}
          className="text-sm font-normal rounded-full bg-green-400 py-1 px-4 text-zinc-100"
        >
          Decrease
        </button>
        <button
          onClick={() => setVal((prev) => prev + 1)}
          className="text-sm font-normal rounded-full bg-sky-400 text-zinc-100 px-3 py-1 ml-2"
        >
          Increase
        </button>
      </div>
      <div className="text-center p-5  bg-zinc-300">
        <h1>name: {elem.name}</h1>
        <h2>isBanned: {elem.isBanned.toString()}</h2>
        <button
          onClick={() => setElem({ ...elem, isBanned: !elem.isBanned })}
          className={`${elem.isBanned ? "bg-green-600" : "bg-red-600"} text-zinc-100 m-3 rounded-full py-1 px-3 font-bold text-sm`}
        >
          {elem.isBanned ? "Allowed" : "Not Allowed"}
        </button>
      </div>
      <div className="p-5 text-center bg-green-200">
        {num.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onMouseOver={() =>
            setNum(() => num.filter((item, index) => index != num.length - 1))
          }
          className="bg-red-500 rounded-full px-4 py-1 text-sm text-zinc-100 font-semibold"
        >
          Remove
        </button>
        <button
          onMouseMove={() => setNum(() => [...num, num.length + 1])}
          className="bg-blue-400 rounded-full px-4 py-1 text-zinc-100 text-sm font-semibold ml-5"
        >
          Adding
        </button>
      </div>
    </>
  );
}

export default Score;
