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

export class ClassGameBoard extends Component {
  state = {
    count: 0,
    input: "",
  };

  submitFishName = () => {
    alert(this.state.input);
  };
  getNexFish = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const nextFishToName = initialFishes[this.state.count];
    //const [fishNameInput, setFishInput] = this.state.input;
    //disabeler
    const isLast = this.state.count === initialFishes.length - 1;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            onChange={(e) => {
              this.state.input = e.target.value;
            }}
            type="text"
            name="fish-guess"
          />
          <input
            onClick={(e) => {
              e.preventDefault();
              this.submitFishName();
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
