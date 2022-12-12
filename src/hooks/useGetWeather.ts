import { clientEnv } from 'env/schema.mjs';
import { useState } from 'react';
import axios from 'axios';
import { Weather, WeatherGroupe } from 'context/saves/types';
import Toast from '@components/common/toast';

type TWeather = {
  getWeatherByCity: (props: string) => void;
  getWeatherById: (props: number) => void;
  getWeatherBylatAndLon: (lat: number, lon: number) => void;
  getGroupWeather: (
    props: number[],
    fn?: (save: WeatherGroupe) => void
  ) => void;
  weather: any;
  loading: boolean;
  error: string;
};
const API_KEY = clientEnv.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
export const useGetWeather = (): TWeather => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getWeatherBylatAndLon = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setWeather(data);
      setLoading(false);
    } catch (error: any) {
      setWeather(null);
      setError(error);
      setLoading(false);
      Toast("Can't find such city", 'error');
    }
  };
  const getWeatherByCity = async (city: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(data);
      setLoading(false);
    } catch (error: any) {
      setWeather(null);
      setError(error);
      setLoading(false);
      Toast("Can't find such city", 'error');
    }
  };
  const getWeatherById = async (id: number) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`
      );
      setWeather(data);
      setLoading(false);
    } catch (error: any) {
      setWeather(null);
      setError(error);
      setLoading(false);
      Toast("Can't find such city", 'error');
    }
  };
  const getGroupWeather = async (
    ids: number[],
    fn?: (save: WeatherGroupe) => void
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${ids.join(
          ','
        )}&appid=${API_KEY}`
      );
      setLoading(false);
      fn && fn(data);
    } catch (error: any) {
      setError(error);
      setLoading(false);
      Toast("Can't find group of ids", 'error');
    }
  };
  return {
    getGroupWeather,
    getWeatherByCity,
    getWeatherById,
    getWeatherBylatAndLon,
    weather,
    loading,
    error,
  };
};
