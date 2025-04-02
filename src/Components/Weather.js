import { useState } from "react";




function Weather() {

    let[country,setCountry] =  useState('');    
    let[city,setCity] =  useState('');
    let[degre,setWeather] = useState('');

    

    


    return(
    <> 
        <div className="container mt-4">
            <input className="me-3" type="text" placeholder="The name of the country" onInput={(e) => setCountry(e.target.value)}/>              
            <input className="me-3" type="text" placeholder="The name of the city" onInput={(e)=> setCity(e.target.value)}/>
            <input className="me-3" type="number" placeholder="Weather degre" onInput={(e) => setWeather(e.target.value)}/>
            <button>Add city</button>
        </div>


    </>    
    ) 
    

    

        

    
  };
  
  export default Weather;
  