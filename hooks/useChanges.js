import { useEffect, useState, use } from 'react'
import { useWeather } from './useWeather';
const { getWeather } = useWeather();
const weatherPromise = getWeather();
export function useChanges() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState({})

  useEffect(() => {
    setLoading(true);
    try {
      const data = use(weatherPromise)
      console.log(data)
    } catch (error) {

    } finally {
      setLoading(false)
    }

  }, [])



  return {
    isNavOpen,
    setIsNavOpen,
    isCelcius,
    setIsCelcius,
    loading,
    setLoading,
    weather
  }
}


