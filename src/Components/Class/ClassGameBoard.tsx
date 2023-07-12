import { Component } from "react";
import "./styles/game-board.css";
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

type userFishSubmission = {
  fishNameInput: string;
};

export class ClassGameBoard extends Component<{
  handleFishInput: (info: userFishSubmission) => void;
}> {
  state = {
    count: 0,
    input: "",
  };

  getNexFish = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const nextFishToName = initialFishes[this.state.count];
    const isLast = this.state.count === initialFishes.length - 1;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
              this.props.handleFishInput({
                fishNameInput: this.state.input,
              });
            }}
            type="text"
            name="fish-guess"
          />
          <input
            onClick={(e) => {
              e.preventDefault();
              this.getNexFish();
            }}
            disabled={isLast}
            type="submit"
          />
        </form>
      </div>
    );
  }
}
