import "./styles/game-board.css";
//import { Images } from "../../assets/Images";
import { FormEvent, useState } from "react";

type FishItem = {
  name: string;
  url: string;
};

type FunctionalGameBoardProps = {
  fishData: FishItem;
  handleAnswer: (answer: string) => void;
};

export function FunctionalGameBoard({
  fishData,
  handleAnswer,
}: FunctionalGameBoardProps) {
  const [fishInput, setFishInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAnswer(fishInput);
    setFishInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={fishInput}
          onChange={(e) => {
            setFishInput(e.target.value);
          }}
          type="text"
          name="fish-guess"
        />
        <input value={"submit"} type="submit" />
      </form>
    </div>
  );
}
