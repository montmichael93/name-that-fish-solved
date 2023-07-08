import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalGameBoard() {
  const [fishIndex, setFishIndex] = useState(0);

  const nextFishToName = initialFishes[fishIndex];

  //disabeler
  const isLast = fishIndex === initialFishes.length - 1;

  const submitFishName = () => {
    setFishIndex(fishIndex + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" />
        <input
          onClick={(e) => {
            e.preventDefault();
            submitFishName();
          }}
          disabled={isLast}
          type="submit"
        />
      </form>
    </div>
  );
}
