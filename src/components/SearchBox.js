import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                id="cards"
                className='pa3 ba b-lightest-blue: bg-lightest-blue'
                type='search'
                placeholder='Search your Infocard'
                onChange={searchChange}
            />
            <label for="cards">Search Infocards</label>
        </div>
    );
}

export default SearchBox;
