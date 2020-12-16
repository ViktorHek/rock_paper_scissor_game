import React from 'react'
import rsz_charizard from "./images/rsz_charizard.png"
import ditto from "./images/ditto.jpeg"
import feraligator from "./images/feraligator.png"
import rsz_sceptile from "./images/rsz_sceptile.png"

const DisplayPlayer = ({ pokemon }) => {

    return (
      <div className="player">
          <img className="player-img"
            src= {
                pokemon === "fire" ? rsz_charizard : pokemon === "water" ? feraligator : pokemon === "grass" ? rsz_sceptile : ditto
            } alt= "image can not load"
          />
      </div>
    )
}
export default DisplayPlayer;