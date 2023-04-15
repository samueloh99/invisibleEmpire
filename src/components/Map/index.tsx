import React, { useEffect, useState } from "react";

interface PlayersState {
  player: number;
  troops: number;
}

const countries = [
  {
    id: 0,
    name: "Canada",
    color: "#0072C6", // red
  },
  {
    id: 1,
    name: "Japan",
    color: "#0072C6", // red
  },
  {
    id: 2,
    name: "France",
    color: "#0072C6", // blue
  },
  {
    id: 3,
    name: "Brazil",
    color: "#0072C6", // green
  },
  {
    id: 4,
    name: "Mexico",
    color: "#0072C6", // green
  },
  {
    id: 5,
    name: "South Korea",
    color: "#0072C6", // red
  },
  {
    id: 6,
    name: "Germany",
    color: "#FF9933", // black
  },
  {
    id: 7,
    name: "China",
    color: "#FF9933", // red
  },
  {
    id: 8,
    name: "Russia",
    color: "#FF9933", // white
  },
  {
    id: 9,
    name: "Australia",
    color: "#FF9933", // blue
  },
  {
    id: 10,
    name: "Spain",
    color: "#FF9933", // red
  },
  {
    id: 11,
    name: "India",
    color: "#FF9933", // orange
  },
  {
    id: 12,
    name: "Italy",
    color: "#FF9933", // green
  },
  {
    id: 13,
    name: "United Kingdom",
    color: "#0072C6", // blue
  },
  {
    id: 14,
    name: "Argentina",
    color: "#0072C6", // blue
  },
  {
    id: 15,
    name: "South Africa",
    color: "#0072C6", // green
  },
];

const Map = () => {
  const [players, setPlayers] = useState<PlayersState[]>([]);

  const handleClickAttack = () => {
    const newObj = {
      pk: "",
      signature: "",
      countryA: "",
      countryB: "",
    };

    console.log(newObj);
  };

  const { player1, player2 } = countries.reduce(
    (accumulator, current) => {
      if (current.color === "#0072C6") {
        accumulator.player1++;
      } else if (current.color === "#FF9933") {
        accumulator.player2++;
      }
      return accumulator;
    },
    { player1: 0, player2: 0 }
  );

  console.log((player1 / 16) * 100);

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-4 gap-10 w-full justify-center py-10 px-10">
        {countries.map((item, index) => {
          const color = item.color;
          return (
            <div
              key={index}
              onClick={() => handleClickAttack()}
              style={{ backgroundColor: item.color }}
              className={`flex p-5 w-full text-white border border-white rounded-lg cursor-pointer items-center justify-center font-bold`}
            >
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-5 h-full">
        <div className="flex flex-col justify-center items-center border border-white h-[200px] w-[200px]">
          <h1>Player 1</h1>
          <h1>{(player1 / 16) * 100}%</h1>
          <h1>Troops: 10</h1>
        </div>
        <div className="flex flex-col justify-center items-center border border-white h-[200px] w-[200px]">
          <h1>Player 2</h1>
          <h1>{(player2 / 16) * 100}%</h1>
          <h1>Troops: 10</h1>
        </div>
      </div>
    </div>
  );
};

export default Map;
