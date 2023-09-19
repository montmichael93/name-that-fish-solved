import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { isClassFishNameCorrect } from "../../types";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleFishInput = (userSubmission: null | isClassFishNameCorrect) => {
    if (userSubmission?.checkUserInput) {
      this.state.correctCount = userSubmission?.checkUserInput[0];
      this.setState({ correctCount: userSubmission?.checkUserInput[0] });
      this.state.incorrectCount = userSubmission?.checkUserInput[1];
      this.setState({ incorrectCount: userSubmission?.checkUserInput[1] });
    }
  };

  render() {
    return (
      <>
        <>
          {this.state.correctCount + this.state.incorrectCount != 4 ? (
            <ClassScoreBoard
              isUserCorrect={[
                this.state.correctCount,
                this.state.incorrectCount,
              ]}
            />
          ) : undefined}

          {this.state.correctCount + this.state.incorrectCount != 4 ? (
            <ClassGameBoard
              handleFishInput={(userSubmission) => {
                this.handleFishInput(userSubmission);
              }}
            />
          ) : undefined}
        </>
        {this.state.correctCount + this.state.incorrectCount === 4 ? (
          <ClassFinalScore
            userResluts={[this.state.correctCount, this.state.incorrectCount]}
          />
        ) : undefined}
      </>
    );
  }
}
