import React from 'react'


class ComputerCharacter {

    ComputerSelection = () => {
        let Character = ['Rock', "paper", "Scissor"]
        let random = console.log(Math.floor(Math.random() * 3))
    };

    ComputerChoose = () => {
        return (Character[random])
    }

}

export default ComputerCharacter