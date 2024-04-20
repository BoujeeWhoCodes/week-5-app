import React from 'react';

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");
    
    function showtFahrenheit(event) {
			event.preventDefault();
			setUnit("Fahrenheit");
		}


    function showtCelcius(event) {
        event.preventDefault();
       setUnit("celcius");
    }
   
   
    if(unit === "celcius") {
         return (
						<div className='WeatherTemperature'>
							<span className='temperature'>{Math.round(props.celsius)}</span>
							<span className='unit'>
								°C | <a href="/" onClick={showFahrenheit}>°F</a>
							</span>
						</div>
					);
    }  else {
        let fahrenheit = (props.celcius * 9/5) + 32;
        return (
            <div className='WeatherTemperature'>
							<span className='temperature'>{Math.round(props.celsius)}</span>
							<span className='unit'>
								°C | <a href="/" onClick={showCelcius}>°F</a>
							</span>
						</div>
					);
    }
}
