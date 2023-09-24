import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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

export class ClassApp extends Component {
  state = {
    incorrect: 0,
    correct: 0,
  };

  render() {
    const fishIndex = this.state.correct + this.state.incorrect;
    const isGameOver = initialFishes.length === fishIndex;
    const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

    const handleAnswer = (answer: string) => {
      if (initialFishes[fishIndex].name === answer) {
        this.setState({ correct: this.state.correct + 1 });
      } else {
        this.setState({ incorrect: this.state.incorrect + 1 });
      }
    };

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correct}
              incorrectCount={this.state.incorrect}
              answersLeft={answersLeft}
            />

            <ClassGameBoard
              fishData={initialFishes[fishIndex]}
              handleAnswer={handleAnswer}
            />
          </>
        )}

        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correct}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
