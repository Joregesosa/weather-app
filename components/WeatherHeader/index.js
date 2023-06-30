import React from 'react';
import './WeatherHeader.css';
import Image from 'next/image';
function WeatherHeader(props) {
    return (
        <header className=' flex justify-around items-end h-16'>

            <input
                className=" w-44 h-9 bg-[#6E707A] text-[#E7E7EB] cursor-pointer text-center"
                type="button"
                value="Search for Places"
                /* onClick={() => { props.setOpenNav(true) }} */ />

            <div className=" flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer"
             /* onClick={()=>{props.getWeatherByGeoLocation()}} */ >
                 
                <Image src='/location.svg' width={25} height={25}/>
            </div>

        </header>
    )
}

export { WeatherHeader };