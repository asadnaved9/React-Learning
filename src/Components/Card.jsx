import React from "react";
function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Google Products",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, cum!",
      instock: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww",
      name: "Samsung Products",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, cum!",
      instock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1588524594091-77b993b0619f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple Products",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, cum!",
      instock: false,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex  items-center justify-center gap-10">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-slate-300 rounded-md overflow-hidden text-center"
        >
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            <button
              className={`px-4 py-1 ${elem.instock ? "bg-blue-500" : "bg-red-500"} text-sm rounded text-zinc-100 mt-4`}
            >
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
