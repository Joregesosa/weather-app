import React from "react";

function WeatherNavContainer({children}) {
    return (
        <section className="w-screen h-screen max-h-screen bg-[#1E213A] absolute top-0 left-0 md:w-[30vw] md:min-w-[380px]">
            {children}
        </section>
    )
}

export {WeatherNavContainer};