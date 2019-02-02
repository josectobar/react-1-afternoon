import React, { Component } from 'react';


class FilterString extends Component {

    constructor(){
        super()

        this.state = {
            unFilteredArray: ["sleep", "eat", "code", "cry", "repeat", "sleep", "code","eat", "repeat"],
            userInput: ``,
            filteredArray: [],
        }
    }

    handleUserInput(value){
        this.setState({
            userInput: value
        })
    }

    handleFilterString(){
        const tempFilteredArray = this.state.unFilteredArray.filter(string => string.startsWith(this.state.userInput))

        this.setState({
            filteredArray: tempFilteredArray,
            userInput: ``
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} value={this.state.userInput}/>
            <button className="confirmationButton" onClick={() => this.handleFilterString()}>Filter</button>
            <span className="resultsBox filterStringPB">Filtered string: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;