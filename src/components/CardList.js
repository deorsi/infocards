import React from 'react';
import Card from './Card';


const CardList = ({ infocard }) => {
    if (true) {
        throw new Error('NOOOO');
    }
    return (
        <div>
            {
                infocard.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={infocard[i].id} 
                            name={infocard[i].name} 
                            email={infocard[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;