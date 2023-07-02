import React from "react";


function WeatherNavList(props) {
    return (
        <ul className="flex flex-col items-center w-full h-fit mt-80px pb-5">

            {props.children}

        </ul>
    )
}
export { WeatherNavList }; 