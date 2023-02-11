import axios from 'axios';

const TMDB_TOKEN: string = process.env.REACT_APP_TOKEN!;
const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
export const BASE_IMG_URL_300 = "https://image.tmdb.org/t/p/w300";

export const fetchAxios = axios.create({
   baseURL: BASE_URL,
   headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
   }
})