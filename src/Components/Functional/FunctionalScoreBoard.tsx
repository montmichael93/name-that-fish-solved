import "./styles/score-board.css";
//  Where the score is presented
import { isFunctionalFishNameCorrect } from "../../types";

const incorrectCount = 0;
const correctCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];
const removeFromAnswers = structuredClone(answersLeft);
let addToCorrectCount = structuredClone(correctCount);
let addToIncorrectCount = structuredClone(incorrectCount);

export function FunctionalScoreBoard({
  isUserCorrect,
}: {
  isUserCorrect: isFunctionalFishNameCorrect | null;
}) {
  if (
    isUserCorrect?.checkUserInput === true ||
    (Array.isArray(isUserCorrect?.checkUserInput) &&
      isUserCorrect?.checkUserInput[0] === true)
  ) {
    addToCorrectCount += 0.5;
  }

  if (
    isUserCorrect?.checkUserInput === false ||
    (Array.isArray(isUserCorrect?.checkUserInput) &&
      isUserCorrect?.checkUserInput[0] === false)
  ) {
    addToIncorrectCount += 0.5;
  }

  return (
    <div id="score-board">
      <div>
        Incorrect 🔻:{" "}
        {isUserCorrect?.checkUserInput === null
          ? incorrectCount
          : addToIncorrectCount}
      </div>
      <div id="choices-left">
        {isUserCorrect?.checkUserInput === null
          ? answersLeft.map((answer) => (
              <div key={answer} className="choice">
                {answer}
              </div>
            ))
          : removeFromAnswers
              .slice(addToCorrectCount + addToIncorrectCount)
              .map((answer) => (
                <div key={answer} className="choice">
                  {answer}
                </div>
              ))}
      </div>
      <div>
        Correct ✅:{" "}
        {isUserCorrect?.checkUserInput === null
          ? correctCount
          : addToCorrectCount}
      </div>
    </div>
  );
}
