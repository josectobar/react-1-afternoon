import React, { Component } from 'react';


class Palindrome extends Component {

    constructor(){
        super()

        this.state = {
            userInput:``,
            palindrome:``
        }
    }

    handleUserInput(value){
        this.setState({
            userInput:value,
            palindrome: ``
        })
    }

    handlePalindromeEval(){
        const inputString = this.state.userInput.toLowerCase().split("").filter(char => char !== " ")
        const tempPalindrome = () => 
        inputString.join('') === inputString.reverse().join('') ? "Yes, it's palindrome! 😀" : "No, it's not a palindrome 😞"
        this.setState({
            palindrome: tempPalindrome(),
            userInput:``
        })
        console.log(typeof this.state.palindrome)
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(event) => this.handleUserInput(event.target.value)} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={() => this.handlePalindromeEval()}>Evaluate</button>
                <span className="resultsBox">Palindrome? {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;