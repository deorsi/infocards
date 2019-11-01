import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


class App extends Component {
    constructor () {
        super()
        this.state = {
            infocard: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ infocard: users })});
      }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () { 
        const { infocard, searchfield } = this.state;
        const filteredInfocard = infocard.filter(infocard => {
            return infocard.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !infocard.length ?
            <h1>Loading</h1> :
            (
            <div className='tc'>   
                <h1 className='f1'>Infocards</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList infocard={filteredInfocard} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;