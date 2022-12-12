import React from 'react';

/* eslint-disable camelcase */

export interface WeatherGroupe {
  cnt: number;
  list: Weather[];
}
export interface Weather {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main:
    | 'Thunderstorm'
    | 'Drizzle'
    | 'Rain'
    | 'Snow'
    | 'Atmosphere'
    | 'Clear'
    | 'Clouds';
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type SavesContextProps = {
  saves: Weather[];
  setSaves: React.Dispatch<React.SetStateAction<Weather[]>>;
  addSave: (save: Weather) => void;
};
export type SavesProviderProps = {
  children: React.ReactNode;
};
