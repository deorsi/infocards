import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestInfocards } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchInfos.searchField,
        infocards: state.requestInfocards.infocards,
        isPending: state.requestInfocards.isPending,
        error: state.requestInfocards.error
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestInfocards: () => dispatch(requestInfocards())

    } 
}


class App extends Component {
    componentDidMount() {
        this.props.onRequestInfocards();
      }

    render () { 
        const { searchField, onSearchChange, infocards, isPending } = this.props;
        const filteredInfocard = infocards.filter(infocards => {
            return infocards.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading</h1> :
            (
            <div className='tc'>   
                <h1 className='f1'>Infocards</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList infocard={filteredInfocard} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);