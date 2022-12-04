import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput'

function BoilingVerdict({ celsius }) { 
    if (celsius < 100) { 
        return <p>물이 끓습니다</p>
    }
    else {
        return <p>물이 끓지 않습니다.</p>
    }
}

const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const toFahrenheit = (celsius) => (celsius * 9) /5 + 32;

const tryConvert = (temp, convert) => { 
    const input = parseFloat(temp);
    if (Number.isNaN(input)) { 
        return "";
    }
    const output = convert(temp);
    const rounded = Math.round(output);
    
    return rounded.toString();
}

function Calculator() { 
    const [tempValue, setTempValue] = useState();
    const [scale, setScale] = useState();
    

    const handleCelsiusChange = (temp) => { 
        setTempValue(temp);
        setScale('c');
    };
    const handleFahrenheitChange = (temp) => { 
        setTempValue(temp);
        setScale('f');
    };

    const celsius = scale === 'f' ? tryConvert(tempValue, toCelsius) : tempValue;
    const fahrenheit = scale === 'c' ? tryConvert(tempValue, toFahrenheit) : tempValue;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}                
            ></TemperatureInput>
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}                
            ></TemperatureInput>

            <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
        </div>
    );
}

export default Calculator;