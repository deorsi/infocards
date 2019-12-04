import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                aria-label="Search Infocards"
                className='pa3 ba b-lightest-blue: bg-lightest-blue'
                type='search'
                placeholder='Search your Infocard'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;