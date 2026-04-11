import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Image() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-80 h-52 bg-zinc-500 rounded-md overflow-hidden flex">
        <img
          className={`shrink-0 transition-transform duration-900 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1758407909328-6b46fbfc5f98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 transition-transform duration-900 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1744607693346-5d31a2a15733?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10  flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRight size={"1em"} />
        </span>
      </div>
    </div>
  );
}

export default Image;
