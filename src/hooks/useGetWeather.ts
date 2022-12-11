import { clientEnv } from 'env/schema.mjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
type GetWeatherProps = {
  lat?: number;
  lon?: number;
  city?: string;
  country?: string;
};

type TWeather = {
  getWeather: (props: GetWeatherProps) => void;
  weather: any;
  loading: boolean;
  error: string;
};
const API_KEY = clientEnv.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
export const useGetWeather = (): TWeather => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getWeather = async ({ city, country, lat, lon }: GetWeatherProps) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };
  return { getWeather, weather, loading, error };
};
