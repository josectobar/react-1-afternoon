import React, { Component } from 'react';


class FilterObject extends Component {
    
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {name: "jose", age: 36, title: "Hacker"},
                {name: "July", age: 15, spiritAnimal: "Wolf"},
                {name: "Mariana", age: 10, nickName: "Piti"},
                {name: "Maggie", age: 31, title:"CHES"}
            ],
            userInput:``,
            filteredArray: []
        }
    }

    handleUserInput(value) {
        this.setState({
            userInput: value
        })
    }

    handleFilterArray() {
        const filterObj = this.state.unFilteredArray.filter(obj => obj.hasOwnProperty(this.state.userInput))
        
        this.setState({
            filteredArray: filterObj,
            userInput:``
        })
    }
    
//
    render() {

        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original:{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} value={this.state.userInput} />
            <button className="confirmationButton" onClick={()=>this.handleFilterArray()}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;