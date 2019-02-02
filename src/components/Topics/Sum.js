import React, { Component } from 'react';


class Sum extends Component {

    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleUserInput1(value){

        this.setState({
            number1: value
        })
    }
    handleUserInput2(value){

        this.setState({
            number2: value
        })
    }

    handleSum(){
        const tempNum1 = +this.state.number1
        const tempNum2 = +this.state.number2
        const tempSum = tempNum1 + tempNum2

        this.setState({
            sum: tempSum
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" className="inputLine" onChange={(e) => this.handleUserInput1(e.target.value)}  value={this.state.number1}></input>
                <input type="number" className="inputLine" onChange={(e) => this.handleUserInput2(e.target.value)}  value={this.state.number2}></input>
                <button className="confirmationButton" onClick={() => this.handleSum()}>Add</button>
                <span className="resultsBox">sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;