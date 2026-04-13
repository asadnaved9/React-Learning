import React, { useState } from "react";
import Card from "./Components/Card";
import Song from "./Components/Song";
import Score from "./Components/Score";
import Image from "./Components/Image";
import Props from "./Components/Props";

function App() {
  const data = [
    {
      name: "Jhon",
      profession: "React Developer",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Jimmy",
      profession: "Web Developer",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Michel",
      profession: "Data Analyst",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
      friend: false,
    },
    {
      name: "Henry",
      profession: "Cyber Security",
      image:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  const handelFriendsButton = (cardindex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friend: !item.friend };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-black flex gap-4 items-center justify-center">
        {realData.map((item, index) => (
          <Props
            key={index}
            index={index}
            handelClick={handelFriendsButton}
            values={item}
          />
        ))}
      </div>

      <Card />
      <Song />
      <Score />
      <Image />
    </>
  );
}

export default App;
