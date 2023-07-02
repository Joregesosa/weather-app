import React from "react";
import Image from "next/image";
function WeatherForecastDays({
    date,
    min_f,
    max_f,
    min_c,
    max_c,
    icon,
    isCelcius
}) {
    return (

        <li className="w-[7.5rem] h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">

            <h3 className=" mb-2">
                {date}
            </h3>

            <span className="flex items-center justify-center w-14 h-16">

                <Image className="w-full h-full object-contain" src={`/weather/${icon}.png`} width={56} height={64} alt="condition" /> 
                
            </span>

            <div className=" flex gap-2 mt-2">

                <p >{isCelcius? max_c:max_f}</p>

                <p className="text-[#A09FB1]">{isCelcius? min_c:min_f}</p>

            </div>

        </li>

    )
}
export { WeatherForecastDays };