import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { Component } from "react";
import { isClassFishNameCorrect } from "../../types";

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

export class ClassGameBoard extends Component<{
  handleFishInput: (info: isClassFishNameCorrect) => void;
}> {
  state = {
    fishIndex: 0,
    SubmittedfishName: "",
    correctCount: 0,
    incorrectCount: 0,
  };

  getNexFish = () => {
    const isLast = this.state.fishIndex === initialFishes.length - 1;
    isLast
      ? this.setState({ fishIndex: this.state.fishIndex })
      : this.setState({ fishIndex: this.state.fishIndex + 1 });
    this.setState({ SubmittedfishName: (this.state.SubmittedfishName = "") });
  };

  render() {
    const nextFishToName = initialFishes[this.state.fishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            value={this.state.SubmittedfishName}
            onChange={(e) => {
              this.setState({ SubmittedfishName: e.target.value });
            }}
            type="text"
            name="fish-guess"
          />
          <input
            onClick={(e) => {
              e.preventDefault();
              if (this.state.SubmittedfishName === nextFishToName.name) {
                this.setState({ correctCount: (this.state.correctCount += 1) });
                this.props.handleFishInput({
                  checkUserInput: [
                    this.state.correctCount,
                    this.state.incorrectCount,
                  ],
                });
              } else if (this.state.SubmittedfishName != nextFishToName.name) {
                this.setState({
                  incorrectCount: (this.state.incorrectCount += 1),
                });
                this.props.handleFishInput({
                  checkUserInput: [
                    this.state.correctCount,
                    this.state.incorrectCount,
                  ],
                });
              }
              this.getNexFish();
            }}
            type="submit"
          />
        </form>
      </div>
    );
  }
}
