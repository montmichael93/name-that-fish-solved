import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

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

export function FunctionalApp() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const fishIndex = correct + incorrect;
  const isGameOver = initialFishes.length === fishIndex;
  const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

  const handleAnswer = (answer: string) => {
    if (initialFishes[fishIndex].name === answer) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correct}
            incorrectCount={incorrect}
            answersLeft={answersLeft}
          />

          <FunctionalGameBoard
            fishData={initialFishes[fishIndex]}
            handleAnswer={handleAnswer}
          />
        </>
      )}

      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correct}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
