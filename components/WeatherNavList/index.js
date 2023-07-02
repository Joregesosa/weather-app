import React from "react";


function WeatherNavList(props) {
    return (
        <ul className="flex flex-col items-center w-full h-full mt-80px">

            {props.children}

        </ul>
    )
}
export { WeatherNavList }; 