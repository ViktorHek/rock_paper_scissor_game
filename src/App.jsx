import React, { Component } from 'react'

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
        {character}
        <br/>
        <button onClick={this.ChooseRock}>Choose Rock</button>
        <button onClick={this.ChoosePaper}>Choose Paper</button>
        <button onClick={this.ChooseScissor}>Choose Scissor</button>

      </div>
    )

  }
}
export default App;
