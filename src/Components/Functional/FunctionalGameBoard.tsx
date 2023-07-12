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

export type userFishSubmission = {
  fishNameInput: string;
};

export function FunctionalGameBoard({
  handleFishInput,
}: {
  handleFishInput: (info: userFishSubmission) => void;
}) {
  //fish Images
  const [fishIndex, setFishIndex] = useState(0);
  const nextFishToName = initialFishes[fishIndex];
  const [fishNames, setFishInput] = useState("");
  //disabeler
  const isLast = fishIndex === initialFishes.length - 1;

  const getNexFish = () => {
    setFishIndex(fishIndex + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={fishNames}
          onChange={(e) => {
            setFishInput(e.target.value);
            handleFishInput({
              fishNameInput: fishNames,
            });
          }}
          type="text"
          name="fish-guess"
        />
        <input
          onClick={(e) => {
            e.preventDefault();
            getNexFish();
          }}
          disabled={isLast}
          type="submit"
        />
      </form>
    </div>
  );
}
