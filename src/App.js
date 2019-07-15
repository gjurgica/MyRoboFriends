import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';
import './App.css';



class  App extends  Component  {
    constructor(){
        super()
        this.state = {
            Robots: [],
            SearchField: "" 
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {return response.json()})
        .then(users => {this.setState({Robots:users})})
    }
    onSearchChange = (event) =>{
        this.setState({SearchField:event.target.value});
    }
    render(){
        const filterRobots = this.state.Robots.filter(robot =>
            {return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase())}
            )
        return(
            <div className="tc">
                <h1 className="f1">My Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList Robots = {filterRobots}/> 
                </Scroll>
            </div>
        )
    }
   
}

export default App;