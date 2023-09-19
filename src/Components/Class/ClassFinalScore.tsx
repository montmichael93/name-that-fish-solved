import { Component } from "react";

const totalCount = 0;
const correctCount = 0;

export class ClassFinalScore extends Component<{
  userResluts: [number, number] | null;
}> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>
            {this.props.userResluts === null
              ? correctCount
              : this.props.userResluts[0]}
          </p>
          <hr />
          <p>
            {this.props.userResluts === null
              ? totalCount
              : this.props.userResluts[0] + this.props.userResluts[1]}
          </p>
        </div>
      </div>
    );
  }
}
