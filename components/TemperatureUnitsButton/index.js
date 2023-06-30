import React from "react"; 

function TemperatureUnitsButton({ setChangeTemp }) {
    const onClickButton_F = () => {
        setChangeTemp('°F');
    }
    const onClickButton_c = () => {
        setChangeTemp('°C');
    }
    return (

        <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">

            <button className=" w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C]  bg-[#E7E7EB] rounded-full" /* onClick={onClickButton_c} */>
                °C
            </button>

            <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB]  bg-[#585676] rounded-full" /* onClick={onClickButton_F} */>
                °F
            </button>

        </div>

    )

}

export { TemperatureUnitsButton };