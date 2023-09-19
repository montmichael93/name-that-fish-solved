import "./styles/final-score.css";
import { isFunctionalFishNameCorrect } from "../../types";
const correctCount = 0;
const totalCount = 0;

export const FunctionalFinalScore = ({
  finalResult,
}: {
  finalResult: isFunctionalFishNameCorrect | null;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>
        {Array.isArray(finalResult?.checkUserInput)
          ? finalResult?.checkUserInput[1]
          : correctCount}
      </p>
      <hr />
      <p>
        {Array.isArray(finalResult?.checkUserInput)
          ? finalResult?.checkUserInput[2]
          : totalCount}
      </p>
    </div>
  </div>
);
