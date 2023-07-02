'use client'
import React, { Fragment, use } from 'react'
import WeatherContainer from '@/components/WeatherContainer'
import { WeatherNavContainer } from '@/components/WeatherNavContainer'
import { WeatherNav } from '@/components/WeatherNav'
import { WeatherNavList } from '@/components/WeatherNavList'
import { WeatherNavItems } from '@/components/WeatherNavItems'
import { LeftSide } from '@/components/LeftSide'
import { TemperatureUnitsButton } from '@/components/TemperatureUnitsButton'
import { TodayHightlights } from '@/components/TodayHightlights'
import { WeatherForecast } from '@/components/WeatherForecast'
import { WeatherForecastDays } from '@/components/WeatherForecastDays'
import { WeatherHeader } from '@/components/WeatherHeader'
import { WeatherTodayInfo } from '@/components/WeatherTodayInfo'
import { RightSide } from '@/components/rightSide'
import { useWeather } from '@/hooks/useWeather'
import { useChanges } from '@/hooks/useChanges'

const {
  getData,
} = useWeather();


const weatherPromise = getData();

export default function Home() {

  const {     
    isNavOpen,
    setIsNavOpen,
    isCelcius,
    setIsCelcius,
    loading,
    setLoading
  } = useChanges();

  const weather = use(weatherPromise);
   
  

  return (
    <Fragment>

      <WeatherContainer>

        <LeftSide>


          <WeatherHeader
            setIsNavOpen={setIsNavOpen}
          />

          {loading && (<WeatherTodayInfo
            // date={weather.current.date}
            // icon={weather.current.icon}
            // temp_c={weather.current.temp_c}
            // temp_f={weather.current.temp_f}
            // condition={weather.current.condition}
            // location={weather.current.location}
            isCelcius={isCelcius}
          />)}

        </LeftSide>

        <RightSide>

          <TemperatureUnitsButton
            setIsCelcius={setIsCelcius}
          />

          <WeatherForecast>


            {/* {!loading && weather.forecast.map((day) => ( */}
            <WeatherForecastDays
            // date={day.date}
            // min_f={day.min_f}
            // max_f={day.max_f}
            // min_c={day.min_c}
            // max_c={day.max_c}
            // icon={day.icon}
            />
            {/* ))} */}


          </WeatherForecast>

          {!loading && (<TodayHightlights
          // windSpeed={weather.current.windSpeed}
          // visivility={weather.current.visivility}
          // pressure={weather.current.pressure}
          // humidity={weather.current.humidity}
          // windDirString={weather.current.windDirString}
          // windDirection={weather.current.windDirection} 
          />)}


        </RightSide>

        {isNavOpen && (
          <WeatherNavContainer>

            <WeatherNav
              setIsNavOpen={setIsNavOpen}
            />

            <WeatherNavList>

              <WeatherNavItems />

            </WeatherNavList>

          </WeatherNavContainer>

        )}


      </WeatherContainer>
    </Fragment>
  )
}
