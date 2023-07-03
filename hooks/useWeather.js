import { useEffect, useState } from "react";

export const useWeather = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCelcius, setIsCelcius] = useState(true);
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState({})
    const [cities, setCities] = useState([]);


    const appid = '3bc4c9f45cf04e7a74ac17d51146bf82';
    const baseUrl = 'https://api.openweathermap.org';
    const units = 'imperial';
    const exclude = 'minutely,hourly,alerts';

    //get geolocation coordinates 
    function getCoordinates() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    // change  date`s format 
    const dateFormat = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        const day = new Date(date);
        return day.toLocaleDateString("en-gb", options);
    }

    // create string wind direcction 
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

    // change  temperature unit 
    const changeTempUnit = (temp_f) => {
        const temp_c = parseInt((temp_f - 32) * 0.5556);

        return temp_c;
    }

    //get ip location
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

    //get geolocatio weather 
    const getAccurateWeather = () => {

        try {

            getCoordinates()
                .then((coords) => {
                    let lat = coords.coords.latitude;

                    let lon = coords.coords.longitude;

                    fetch(`${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}0&limit=1&appid=${appid}`)

                        .then((location) => location.json())

                        .then((cities) => getWeather(lat, lon, cities[0].name))
                })


        } catch (error) {
            return error;
        }
    }

    // get weather by the city
    const getCityWeather = async (lat, lon, city) => {

        getWeather(lat, lon, city);

        setIsNavOpen(false);
    }

    // get cities by name 
    const getCities = async (city) => {
        if (city) {
            try {
                const response = await fetch(`${baseUrl}/geo/1.0/direct?q=${city}&limit=3&appid=${appid}`)

                const jsonResponse = await response.json();

                setCities(jsonResponse);

            } catch (error) {
                console.log(error)
            }
        }


    }

    // Fetche and prepare weather Data 
    const getWeather = async (latitude, longitude, city) => {

        try {


            const response = await fetch(`${baseUrl}/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${appid}&exclude=${exclude}&units=${units}`);

            const jsonResponse = await response.json()


            const current = {
                date: dateFormat(jsonResponse.current.dt * 1000),
                location: city,
                icon: jsonResponse.current.weather[0].icon,
                temp_f: parseInt(jsonResponse.current.temp),
                temp_c: changeTempUnit(jsonResponse.current.temp),
                condition: jsonResponse.current.weather[0].description,
                windDirection: jsonResponse.current.wind_deg,
                windDirString: windDireccion(jsonResponse.current.wind_deg),
                windSpeed_mph: jsonResponse.current.wind_speed,
                windSpeed_ms: (jsonResponse.current.wind_speed * 0.44704).toFixed(2),
                visivility_m: (jsonResponse.current.visibility / 1609).toFixed(2),
                visivility_k: (jsonResponse.current.visibility / 1000).toFixed(2),
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

            setWeather({ current, forecast });


        } catch (error) {

            return error;

        } finally {
            setLoading(false)
        }

    }

    // first automatic call to the weather api
    useEffect(() => {
        getLocationByIp()
            .then((location) => {

                getWeather(location.lat, location.long, location.city);

            })

    }, [])

    return {

        isNavOpen,
        setIsNavOpen,
        isCelcius,
        setIsCelcius,
        loading,
        setLoading,
        weather,
        getAccurateWeather,
        getCities,
        cities,
        getCityWeather


    }


}

