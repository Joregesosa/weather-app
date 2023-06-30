
import { LeftSide } from '@/components/LeftSide'
import { TemperatureUnitsButton } from '@/components/TemperatureUnitsButton'
import { TodayHightlights } from '@/components/TodayHightlights'
import { WeatherForecast } from '@/components/WeatherForecast'
import { WeatherForecastDays } from '@/components/WeatherForecastDays'
import { WeatherHeader } from '@/components/WeatherHeader'
import { WeatherTodayInfo } from '@/components/WeatherTodayInfo'
import { RightSide } from '@/components/rightSide'
import { Fragment } from 'react'
import useWeather from '@/components/useWeather'
export default async function Home() {

  const { getData } = useWeather();
  const { current, forecast } = await getData();
  console.log(current);
  return (
    <Fragment>
      <LeftSide>

        <WeatherHeader />

        <WeatherTodayInfo
          date={current.date}
          icon={current.icon}
          temp={current.temp_c}
          condition={current.condition}
          location={current.location}
        />

      </LeftSide>

      <RightSide>
        <TemperatureUnitsButton />

        <WeatherForecast>

          {forecast.map((day) => (
            <WeatherForecastDays
              date={day.date}
              min_f={day.min_f}
              max_f={day.max_f}
              min_c={day.min_c}
              max_c={day.max_c}
              icon={day.icon}
            />
          ))}



        </WeatherForecast>

        <TodayHightlights
          windSpeed={current.windSpeed}
          visivility={current.visivility}
          pressure={current.pressure}
          humidity={current.humidity}
          windDirString={current.windDirString}
          windDirection={current.windDirection}
        />
      </RightSide>
    </Fragment>
  )
}
