import React from "react";
 
function WeatherForecast({children}) {
  return (
    <section className="w-full md:p-5">

      <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">

        {children}

      </ul>

    </section>
  )
}
export { WeatherForecast }