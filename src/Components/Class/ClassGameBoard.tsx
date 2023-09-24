import "./styles/game-board.css";
//import { Images } from "../../assets/Images";
import { Component, FormEvent } from "react";
//import { isClassFishNameCorrect } from "../../types";

type FishItem = {
  name: string;
  url: string;
};

type ClassGameBoardProps = {
  fishData: FishItem;
  handleAnswer: (answer: string) => void;
};

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    fishInput: "",
  };

  render() {
    const { fishData, handleAnswer } = this.props;

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      handleAnswer(this.state.fishInput);
      this.setState({ fishInput: "" });
    };

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            value={this.state.fishInput}
            onChange={(e) => {
              this.setState({ fishInput: e.target.value });
            }}
            type="text"
            name="fish-guess"
          />
          <input value={"submit"} type="submit" />
        </form>
      </div>
    );
  }
}
