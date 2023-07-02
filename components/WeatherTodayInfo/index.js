import Image from "next/image";

function WeatherTodayInfo(
    {
        icon,
        temp_c,
        temp_f,
        condition,
        date,
        location,
        isCelcius

    }) {

    return (
        <div className="flex flex-col items-center w-full h-[90vh] ">

            <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden after:bg-clouds-bg after:absolute after:w-full after:h-full after:bg-[length:150%_110%] after:bg-no-repeat after:opacity-5 after:bg-[bottom_center]">



                {/* <Image className="w-full h-full  opacity-5" src={'/others/Cloud-background.png'} alt={'nubes bg'} width={600} height={600} priority /> */}

                <div className="flex items-center justify-center w-2/5 absolute">

                    <Image className=" w-full object-contain" src={`/weather/${icon}.png`} width={300} height={300} alt={'condition'} />

                </div>

            </div>

            <div className="flex items-center">

                <h2 className="font-medium text-9xl text-[#E7E7EB] my-8">{isCelcius ? temp_c : temp_f}</h2>

                <h3 className=" mt-6 text-6xl text-[#A09FB1] font-medium">
                    {isCelcius ? '°C' : '°f'}
                </h3>

            </div>

            <h2 className=" capitalize pt-6 pb-12 text-3xl text-[#A09FB1] font-semibold">{condition}</h2>

            <p className=" text-sm text-[#88869D] font-medium mb-6">
                Today &nbsp;&nbsp; . &nbsp;&nbsp; {date}
            </p>

            <pre className="flex items-center gap-2 text-sm text-[#88869D] h-10  bottom-0 font-semibold mb-2">

                <Image className=" mb-2" src={'location_on.svg'} width={20} height={20} alt="location on icon" />

                {location}
            </pre>
        </div>
    )
}
export { WeatherTodayInfo };