import React from "react";

function Song() {
  const data = [
    { name: "Sahiba", desciption: "lorem ispum, dolor sit" },
    {
      name: "Mahiya Ve",
      desciption:
        "lorem ispum, dolor sit amet consectetur adipisicing elit. Aliquid,",
    },
    {
      name: "Tu Dua hai Dua",
      desciption:
        "lorem ispum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorum.",
    },
  ];
  const handleClickDownload = () => {
    alert("Downloading...");
  };
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center">
      {data.map((elem, index) => (
        <div key={index} className="w-90 px-3 py-2 bg-zinc-100 rounded">
          <h3 className="text-xl font-semibold">{elem.name}</h3>
          <p className="text-xs mt-2">{elem.desciption}</p>
          <button
            onMouseMove={handleClickDownload}
            className="px-2 py-1 bg-green-400 font-semibold text-xs rounded mt-3 text-zinc-100"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;
