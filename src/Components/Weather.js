import { useState } from "react";

function Weather() {
    let [country, setCountry] = useState('');
    let [city, setCity] = useState('');
    let [degre, setWeather] = useState('');
    let [cities, setCities] = useState([]);  // Initialize as an empty array

    function addCity() {
        if (country === "" || city === "" || degre === "") {
            return;
        }

        const newCities = {
            name: city,
            country: country,
            degre: degre,
        };

        setCities(currentCities => [...currentCities, newCities]);  // Correct way to add to the array
    }

    return (
        <>
            <div className="container mt-4">
                <input
                    className="me-3"
                    type="text"
                    placeholder="The name of the country"
                    onInput={(e) => setCountry(e.target.value)}
                />
                <input
                    className="me-3"
                    type="text"
                    placeholder="The name of the city"
                    onInput={(e) => setCity(e.target.value)}
                />
                <input
                    className="me-3"
                    type="number"
                    placeholder="Weather degre"
                    onInput={(e) => setWeather(e.target.value)}
                />
                <button onClick={addCity}>Add city</button>
            </div>

            <div>
                {cities.map((city, index) => (
                    <p key={index}>{city.name}, {city.country}, {city.degre}°</p>
                ))}
            </div>
        </>
    );
}

export default Weather;


    

        

    
