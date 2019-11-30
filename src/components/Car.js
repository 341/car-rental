import React from 'react';

function Car({car}) {
    return (
        <div className={'car'}>
            <img src={car.image} alt={car.name} className={'car-image'}/>
            <h2 className={'car-name'}>Name: {car.name}</h2>
            <h5 className={'car-year'}>Year: {car.year}</h5>
            <h5 className={'car-speeds'}>Speed: {car.speeds}</h5>
            <h5 className={'car-price'}>Price: {car.price}</h5>
        </div>
    );
}

export default Car;