 
export const useWeather = () => {

    const dateFormat = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        const day = new Date(date);
        return day.toLocaleDateString("en-gb", options);
    }
    const windDireccion = (value) => {

        if (value < 22.5) {
            return 'N'
        }
        if (value >= 22.5 && value < 45) {
            return 'NNE'
        }
        if (value >= 45 && value < 67.5) {
            return 'NE'
        }
        if (value >= 67.5 && value < 90) {
            return 'ENE'
        }
        if (value >= 90 && value < 112.5) {
            return 'E'
        }
        if (value >= 112.5 && value < 135) {
            return 'ESE'
        }
        if (value >= 135 && value < 157.5) {
            return 'SE'
        }
        if (value >= 157.5 && value < 180) {
            return 'SSE'
        }
        if (value >= 180 && value < 202.5) {
            return 'S'
        }
        if (value >= 202.5 && value < 225) {
            return 'SSW'
        }
        if (value >= 225 && value < 247.5) {
            return 'SW'
        }
        if (value >= 247.5 && value < 270) {
            return 'WSW'
        }
        if (value >= 270 && value < 292.5) {
            return 'W'
        }
        if (value >= 292.5 && value < 315) {
            return 'WNW'
        }
        if (value >= 315 && value < 337.5) {
            return 'NW'
        }
        if (value > 337.5) {
            return 'NNW'
        }


    }
    const changeTempUnit = (temp_f) => {
        const temp_c = parseInt((temp_f - 32) * 0.5556);

        return temp_c;
    }
    const getLocationByIp = async () => {
        try {

            const response = await fetch('https://ipinfo.io/json?token=758fd0d3d30b79')
            const results = await response.json();


            const city = results.city
            const lat = (results.loc).split(',')[0]
            const long = (results.loc).split(',')[1]

            return { lat, long, city };



        } catch (error) {
            console.log(error);
        }
    }

    const getData = async () => {

        try {

            const ipLocation = await getLocationByIp();
            return ipLocation;
            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${ipLocation.lat}&lon=${ipLocation.long}&appid=3bc4c9f45cf04e7a74ac17d51146bf82&exclude=minutely,hourly,alerts&units=imperial`);

            const jsonResponse = await response.json()


            const current = {
                date: dateFormat(jsonResponse.current.dt * 1000),
                location: ipLocation.city,
                icon: jsonResponse.current.weather[0].icon,
                temp_f: parseInt(jsonResponse.current.temp),
                temp_c: changeTempUnit(jsonResponse.current.temp),
                condition: jsonResponse.current.weather[0].description,
                windDirection: jsonResponse.current.wind_deg,
                windDirString: windDireccion(jsonResponse.current.wind_deg),
                windSpeed: jsonResponse.current.wind_speed,
                visivility: jsonResponse.current.visibility,
                pressure: jsonResponse.current.pressure,
                humidity: jsonResponse.current.humidity
            }

            const forecast = [];

            for (let i = 0; i < (jsonResponse.daily.length - 3); i++) {
                forecast.push(
                    {
                        date: i === 0 ? 'Tomorrow' : dateFormat(jsonResponse.daily[i].dt * 1000),
                        min_f: parseInt(jsonResponse.daily[i].temp.min) + '°f',
                        max_f: parseInt(jsonResponse.daily[i].temp.max) + '°f',
                        min_c: changeTempUnit(jsonResponse.daily[i].temp.min) + '°C',
                        max_c: changeTempUnit(jsonResponse.daily[i].temp.max) + '°C',
                        icon: jsonResponse.daily[i].weather[0].icon
                    })

            }

            return { current, forecast };


        } catch (error) {

            return error;

        }  

    }


    return {

        getData,
   
    }


}

// export default useWeather