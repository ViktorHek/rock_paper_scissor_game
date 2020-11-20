import React, { Component } from 'react'
//import computerCharacter from "./computerCharacter"

class App extends Component {
  state = {
    character: 'Choose your character'
  };
  ChooseRock = () => {
    this.setState({ character: 'You have chosen Rock'});
  };
  ChoosePaper = () => {
    this.setState({ character: 'You have chosen Paper'});
  };
  ChooseScissor = () => {
    this.setState({ character: 'You have chosen Scissor'});
  };

  render() {
    const { character } = this.state;

    return (
      <div>
        <h1>Rock Paper Scissor. The Game!</h1>
        <br/>
          <p id="playerSelection">{character}</p>
        <br/>
        <ul class="selection">
          <button class="rock" id="rock" onClick={this.ChooseRock}>Choose Rock</button>
          <button class="paper" id="paper" onClick={this.ChoosePaper}>Choose Paper</button>
          <button class="scissor" id="scissor" onClick={this.ChooseScissor}>Choose Scissor</button>
        </ul>
      </div>
    )
  }
}
export default App;
