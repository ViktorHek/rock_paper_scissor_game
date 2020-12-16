import React, { Component } from 'react'
import DisplayPlayer from "./DisplayPlayer"
import "./App.css"

const pokemons = ["fire", "water", "grass", "starter"]
class Game extends Component {
    
  state = {
    player: pokemons[3],
    computer: pokemons[3],
    winner: ""
  };

  startFight = () => {
  let count = 0;
    let interval = setInterval(() => {
      count++;
      this.setState({
        computer: pokemons[Math.floor(window.Math.random() * 3)],
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
  const { player, computer } = this.state
    if ((player === "fire" && computer === "grass") ||
      (player === "grass" && computer === "water") ||
      (player === "water" && computer === "fire")) {
      return "You are the Champion"
    } else if (player === computer) {
      return "Pokemons don't fight there friends"
    } else {
      return "You lose!"
    }
  }

  choosePokemon = (pokemon) => {
    this.setState({
      player: pokemon,
    })
  }

  render() {
  const { player, computer, winner } = this.state
    return (
      <div className="hero-container">
      <video src="./video.mp4" autoPlay loop muted />
        <h1>Rock Paper Scissor. pokemon edition!</h1>
        <div id="playerSelection">
          <DisplayPlayer pokemon={player} />
          <DisplayPlayer pokemon={computer} />
        </div>
        <div class="selection">
          <button 
            className="selectPokemon" 
            data-cy="fire" 
            onClick={() => this.choosePokemon("fire")}
          >Choose Fire
          </button>
          <button 
            className="selectPokemon" 
            data-cy="water" 
            onClick={() => this.choosePokemon("water")}
          >Choose Water
          </button>
          <button 
            className="selectPokemon" 
            data-cy="grass" 
            onClick={() => this.choosePokemon("grass")}
          >Choose Grass
          </button>
        </div>

        <div className="winner" data-cy="winner">{winner && this.champion()}</div>

        <button type="button" data-cy="startFight" onClick={this.startFight}>Fight!</button>
      </div>
    )
  }
}

export default Game