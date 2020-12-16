import React, { Component } from "react";
import DisplayPlayer from "./DisplayPlayer";
import "./App.css";
import { Button, Icon } from "semantic-ui-react";

const pokemons = ["fire", "water", "grass", "starter"];
class Game extends Component {
  state = {
    player: pokemons[3],
    computer: pokemons[3],
    winner: "",
  };

  startFight = () => {
    let count = 0;
    let interval = setInterval(() => {
      count++;
      this.setState({
        computer: pokemons[Math.floor(window.Math.random() * 3)],
        winner: "",
      });
      if (count > 5) {
        clearInterval(interval);
        this.setState({
          winner: this.champion(),
        });
      }
    }, 100);
  };

  champion = () => {
    const { player, computer } = this.state;
    if (
      (player === "fire" && computer === "grass") ||
      (player === "grass" && computer === "water") ||
      (player === "water" && computer === "fire")
    ) {
      return "You are the Champion";
    } else if (player === computer) {
      return "Pokemons don't fight there friends";
    } else {
      return "You lose!";
    }
  };

  choosePokemon = (pokemon) => {
    this.setState({
      player: pokemon,
    });
  };

  render() {
    const { player, computer, winner } = this.state;
    return (
      <div className="hero-container">
        <video src="./video.mp4" autoPlay loop muted />
        <h1>Rock Paper Scissor. pokemon edition!</h1>
        <div id="playerSelection">
          <DisplayPlayer pokemon={player} />
          <DisplayPlayer pokemon={computer} />
        </div>
        <div class="selection">
          <Button
            animated
            data-cy="fire"
            onClick={() => this.choosePokemon("fire")}
          >
            <Button.Content visible>Choose Fire</Button.Content>
            <Button.Content hidden>
              <Icon name="fire" />
            </Button.Content>
          </Button>
          <Button
            animated
            data-cy="water"
            onClick={() => this.choosePokemon("water")}
          >
            <Button.Content visible>Choose Water</Button.Content>
            <Button.Content hidden>
              <Icon name="tint" />
            </Button.Content>
          </Button>
          <Button
            animated
            data-cy="grass"
            onClick={() => this.choosePokemon("grass")}
          >
            <Button.Content visible>Choose Grass</Button.Content>
            <Button.Content hidden>
              <Icon name="leaf" />
            </Button.Content>
          </Button>
        </div>

        <div className="winner" data-cy="winner">
          {winner && this.champion()}
        </div>

        <Button type="button" data-cy="startFight" onClick={this.startFight}>
          Fight!
        </Button>
      </div>
    );
  }
}

export default Game;
