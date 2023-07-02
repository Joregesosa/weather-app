
import React from "react";
// import './WeatherNavItems.css';

function WeatherNavItems({city,country }) {
    const locationName = city + ',' + country;

    return (
        <li
            className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-semibold cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6 hover:after:content-['>'] hover:after:text-lg hover:after:text-[#616475] hover: hover:after:flex after:mt-3 hover:after:font-bold hover:after:mr-7"
            onClick={() => getWeatherData(locationName)}
        >

            <p className="flex items-center text-lg ml-2">

                {'city'},&nbsp;&nbsp;&nbsp;&nbsp;{'country'}

            </p>

        </li>
    )
}
export { WeatherNavItems };