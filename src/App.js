import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {is_set, speeds} from "./utils/cars";
import Car from "./components/Car";

export function options(value) {
    return <option key={value} value={value}>{value}</option>
}

function App() {

    let [speed, setSpeed] = useState('');
    let [year, setYear] = useState('');
    let [price, setPrice] = useState('');
    let [products, setProducts] = useState([]);

    useEffect(() => {

        const getCars = async (speed, year, price) => {

            let params = {};

            if (is_set(speed)) {
                params.speeds = speed;
            }

            if (is_set(year)) {
                params.year_gte = year;
            }

            if (is_set(price)) {
                params.price_gte = price;
            }

            let cars = await axios.get('http://localhost:3001/cars', {params});
            setProducts(cars.data)
        }

        getCars(speed, year, price);

    }, [speed, year, price]);

    let _speeds = speeds.map(item => options(item.name));
    let _products = products.map((item, index) => <Car car={item} key={index} />);

    return (
        <div className="cars-app">
            <header className="header">
                <h2 className={'header-title'}>Car Rental</h2>
            </header>
            <main>
                <form className={'filters'}>
                    <div className="input-wrapper">
                        <label htmlFor="speed">Select Speed</label>
                        <select name="speeds" id="speeds" onChange={(e) => setSpeed(e.target.value)}>
                            {_speeds}
                        </select>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="year">Set Year</label>
                        <input type={'number'} name={'year'} value={year} onChange={(e) => setYear(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="price">Set Price</label>
                        <input type={'number'} name={'price'} value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                </form>

                <div className="container">
                    {_products}
                </div>
            </main>
        </div>
    );
}

export default App;
