import React, { Component } from 'react'
import Player from "./player"
import './HeroSection.css'
import "./App.css"

const characters = ["rock", "paper", "scissor", "starter"]
class Game extends Component {
    
  state = {
    me: characters[3],
    you: characters[3],
    winner: ""
  };

  startFight = () => {
  let count = 0;
    let interval = setInterval(() => {
      count++;
      this.setState({
        you: characters[Math.floor(Math.random() * 3)],
        winner: ""
      })
      if(count > 5) {
        clearInterval(interval);
        this.setState({
          winner: this.champion()
        })
      }
    }, 100)
  }

  champion = () => {
  const { me, you } = this.state
    if ((me === "rock" && you === "scissor") ||
      (me === "scissor" && you === "paper") ||
      (me === "paper" && you === "rock")) {
      return "You are the Champion"
    } else if (me === you) {
      return "Pokemons don't fight there friends"
    } else {
      return "You lose!"
    }
  }

  chooseCharacter = (character) => {
    this.setState({
      me: character,
      winner: ""
    })
  }

  render() {
  const { me, you, winner } = this.state
    return (
      <div className="hero-container">
      <video src="/video-1.mp4" autoPlay loop muted/>
        <h1>Rock Paper Scissor. pokemon edition!</h1>
        <div id="playerSelection">
          <Player character={me} />
          <Player character={you} />
        </div>
        <div class="selection">
          <button 
            className="selectCharacter" 
            data-cy="rock" 
            onClick={() => this.chooseCharacter("rock")}
          >Choose Fire
          </button>
          <button 
            className="selectCharacter" 
            data-cy="paper" 
            onClick={() => this.chooseCharacter("paper")}
          >Choose Water
          </button>
          <button 
            className="selectCharacter" 
            data-cy="scissor" 
            onClick={() => this.chooseCharacter("scissor")}
          >Choose Grass
          </button>
        </div>

        <div className="winner" data-cy="winner">{winner ? this.champion() : null}</div>

        <button type="button" onClick={this.startFight}>Fight!</button>
      </div>
    )
  }
}

export default Game