import React from 'react';

function Car({car}) {
    return (
        <div className={'car'}>
            <img src={car.image} alt={car.name}/>
            <h2>{car.name}</h2>
            <h5>{car.year}</h5>
            <h5>{car.speeds}</h5>
            <h5>{car.price}</h5>
        </div>
    );
}

export default Car;