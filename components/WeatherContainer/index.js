import React from 'react'

const WeatherContainer = ({children}) => {
  return (
     <div className="bg-[#1E213A] w-screen  min-h-screen flex flex-col items-center md:flex-row">
        {children}
     </div>
  )
}

export default WeatherContainer