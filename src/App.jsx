import {React, useState, useEffect} from "react"
import Confetti from "react-confetti"
import {nanoid} from "nanoid"
import Dies from "./Die"

export default function App() {

    //This function returns 10 number in an array. Then pick a number from that array.

    /*function num() {
        return Math.floor(Math.random() * (6 - 1 + 1) + 1)
      }

    const numbers = []

    for ( let i = 1; i <= 10; i++) {
         numbers.push(num())
    }

      function allNewDice() {
       const  index = Math.floor(Math.random() * numbers.length);
        return numbers[index]
      }*/

    //This function returns 10 numbers between 1 and 6

    function generateNewDie() {
        return {value: Math.ceil(Math.random() * 6), isHeld:false, id:nanoid()}
    }

     function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function holdDice(id) {
        setAllDice(oldDice => oldDice.map(die => {
            return die.id === id? {...die, isHeld: !die.isHeld}: die
        }))
    }


    function rollDice() {
        setAllDice(oldDice => oldDice.map(die => {
            return die.isHeld? die : generateNewDie()
        }))

        if (tenzies) {
            return setAllDice(allNewDice()) && tenzies(false)
        }
    }


    let [allDice, setAllDice] = useState(allNewDice())
    

    const diceElements = allDice.map(die => (<Dies key={die.id} value={die.value} isHeld={die.isHeld} hold={() => holdDice(die.id)} />))

    let [tenzies, setTenzies] = useState(false)
    useEffect(() => {
        const allHeld = allDice.every(die => die.isHeld)
        const initVal = allDice[0].value
        const allSameValue = allDice.every(die => die.value === initVal)
        allHeld && allSameValue? setTenzies(true): setTenzies(false)
    }, 
    [allDice])


    return (
        <main id="main">
            <div id="header">
            <h1>Tenzies</h1>

            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div id="card">
                <div id="dies">
                {diceElements} 
                </div>

                <button id="rollButton" value="Roll" onClick={rollDice}>{tenzies? "New Game": "Roll"}</button>
            </div>
            {tenzies && < Confetti />}
        </main>
    )
}