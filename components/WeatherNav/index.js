import React from "react";
import Image from "next/image";
// import './WeatherNav.css';

function WeatherNav({setIsNavOpen}) {
   
    const [searchLocationVal, setSearchLocationVal] = React.useState('');

    const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=YgPYWjsPMRNWaSXDVPH6KqifZVdRLVH9&q=${searchLocationVal}`

    const onChangeSearchLocation = (event) => {

        setSearchLocationVal(event.target.value);

    }
    return (

        <nav className="w-full h-24 flex items-end justify-around">

            <span className="absolute right-10 top-6 cursor-pointer"
                onClick={() => {  setIsNavOpen(false) }}>

                <Image className=" hover:w-7 hover:h-7" src="/close.svg" width={25} height={25} alt="close icon" />
            </span>

            <div className="flex items-center w-[55%]
             max-w-[268px] h-9 bg-transparent border border-[#E7E7EB]  font-medium text-base text-[#616475]">

                <Image className="  mx-2" src="/search.svg" width={24} height={24} alt="Search Icon" />

                <input
                    className="bg-transparent outline-none w-[233px] h-8 pr-1 "
                    type="text"
                    placeholder="search location"
                    value={searchLocationVal}
                    onChange={onChangeSearchLocation}
                />

            </div>

            <button className=" w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:text-[#def341]"
                onClick={() => props.getLocationInfo(url)}>

                Search

            </button>

        </nav>
    )
}
export { WeatherNav };