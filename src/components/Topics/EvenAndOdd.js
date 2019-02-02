import React, { Component } from 'react';


class EvenAndOdd extends Component {

    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ``
        }
    }

    handleUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    handleAddNumbers() {
        let numbers = this.state.userInput.split(",")
        let evens = numbers.map(number => +number).filter(number=> number % 2 ===0)
        let odds = numbers.map(number => +number).filter(number=> number % 2 !==0)
        console.log(evens)
        console.log(typeof JSON.stringify(evens))

        this.setState({
            evenArray: evens,
            oddArray:odds,
            userInput:``
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} value={this.state.userInput}/>
            <button className="confirmationButton" onClick={() => this.handleAddNumbers()}>Confirm</button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div> 
        )
    }
}

export default EvenAndOdd;