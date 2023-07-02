
import React from "react";
 

function WeatherNavItems({
    country,
    city,
    lat,
    lon, 
    getCityWeather
}) {


    return (
        <li
            className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-medium cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6  hover:after:bg-arrow-bg hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5"
            onClick={() => getCityWeather(lat, lon, city)}
        >

            <p className="flex items-center text-lg ml-2">

                {city},&nbsp;&nbsp;&nbsp;&nbsp;{country}

            </p>

        </li>
    )
}
export { WeatherNavItems };