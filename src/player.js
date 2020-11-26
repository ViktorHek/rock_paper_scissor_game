import React from 'react'
import rsz_charizard from "./rsz_charizard.png"
import ditto from "./ditto.jpeg"
import feraligator from "./feraligator.png"
import rsz_sceptile from "./rsz_sceptile.png"

const Player = ({ character }) => {

    return (
      <div className="player">
          <img className="player-img"
            src= {
                character === "rock" ? rsz_charizard : character === "paper" ? feraligator : character === "scissor" ? rsz_sceptile : ditto
            } alt= "image can not load"
          />
      </div>
    )
}
export default Player;