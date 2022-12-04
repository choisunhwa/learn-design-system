import React from 'react';

const scaleName = {
    c: "섭씨",
    f: "화씨"
};

function TemperatureInput(props) { 

    const eventHandlerChange = (event) => { 
        props.onTemperatureChange(event.target.value);
    };

    return (
        <div>
            <fieldset>
                <legend>온도를 입력해주세요(단위: { scaleName[props.scale] })</legend>
                <input type="text" value={props.temperature} onChange={eventHandlerChange}></input>
            </fieldset>
        </div>
    );
}

export default TemperatureInput;