import { Component } from "react";
import "./styles/score-board.css";

const incorrectCount = 0;
const correctCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];
const removeFromAnswers = structuredClone(answersLeft);
let addToCorrectCount = structuredClone(correctCount);
let addToIncorrectCount = structuredClone(incorrectCount);

export class ClassScoreBoard extends Component<{
  isUserCorrect: [number, number] | null;
}> {
  state = {
    fishOnTheBoard: removeFromAnswers,
  };

  render() {
    if (this.props.isUserCorrect) {
      if (
        this.props.isUserCorrect[0] != 0 ||
        this.props.isUserCorrect[1] != 0
      ) {
        addToCorrectCount = this.props.isUserCorrect[0];
        addToIncorrectCount = this.props.isUserCorrect[1];
      }
    }

    return (
      <div id="score-board">
        <div>
          Incorrect 🔻:{" "}
          {this.props.isUserCorrect && this.props.isUserCorrect[1] === 0
            ? incorrectCount
            : addToIncorrectCount}
        </div>
        <div id="choices-left">
          {this.props.isUserCorrect &&
          this.props.isUserCorrect[0] + this.props.isUserCorrect[1] === 0
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
          {this.props.isUserCorrect && this.props.isUserCorrect[0] === 0
            ? correctCount
            : addToCorrectCount}
        </div>
      </div>
    );
  }
}
