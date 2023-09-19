import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";
import { isFunctionalFishNameCorrect } from "../../types";

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

export function FunctionalGameBoard({
  handleFishInput,
}: {
  handleFishInput: (info: isFunctionalFishNameCorrect) => void;
}) {
  const [fishIndex, setFishIndex] = useState(0);
  const nextFishToName = initialFishes[fishIndex];
  const [SubmittedfishName, setFishInput] = useState("");
  const [userResults, setUserResults] = useState(0);
  const isLast = fishIndex === initialFishes.length - 1;

  const getNexFish = () => {
    isLast ? setFishIndex(fishIndex) : setFishIndex(fishIndex + 1);
    setFishInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={SubmittedfishName}
          onChange={(e) => {
            setFishInput(e.target.value);
          }}
          type="text"
          name="fish-guess"
        />
        <input
          onClick={(e) => {
            e.preventDefault();
            if (SubmittedfishName === nextFishToName.name && !isLast) {
              setUserResults(userResults + 1);

              handleFishInput({
                checkUserInput: true,
              });
            } else if (SubmittedfishName != nextFishToName.name && !isLast) {
              handleFishInput({
                checkUserInput: false,
              });
            }
            const allFishes = initialFishes.map((fish) => fish.name);
            if (SubmittedfishName === nextFishToName.name && isLast) {
              handleFishInput({
                checkUserInput: [true, userResults + 1, allFishes.length],
              });
            } else if (SubmittedfishName != nextFishToName.name && isLast) {
              handleFishInput({
                checkUserInput: [false, userResults, allFishes.length],
              });
            }
            getNexFish();
          }}
          type="submit"
        />
      </form>
    </div>
  );
}
