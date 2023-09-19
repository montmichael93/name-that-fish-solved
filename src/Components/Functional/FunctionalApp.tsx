import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { isFunctionalFishNameCorrect } from "../../types";

export function FunctionalApp() {
  const [userBoolean, setUserSubmition] =
    useState<isFunctionalFishNameCorrect | null>(null);

  return (
    <>
      {!Array.isArray(userBoolean?.checkUserInput) ||
      !userBoolean?.checkUserInput ? (
        <FunctionalScoreBoard isUserCorrect={userBoolean} />
      ) : undefined}

      {!Array.isArray(userBoolean?.checkUserInput) ||
      !userBoolean?.checkUserInput ? (
        <FunctionalGameBoard
          handleFishInput={(userSubmission) => {
            setUserSubmition(userSubmission);
          }}
        />
      ) : undefined}

      {Array.isArray(userBoolean?.checkUserInput) ? (
        <FunctionalFinalScore finalResult={userBoolean} />
      ) : undefined}
    </>
  );
}
