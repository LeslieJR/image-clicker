import axios from 'axios';
import { generateHash } from './generateHash';

export const fetchSuperheroes = async (page) => {
  const apikey = import.meta.env.VITE_APP_PUBLIC_KEY ?? '';
  const limit = 12;
  const offset = (page - 1) * limit;
  const ts = Date.now();
  const hash = generateHash(ts, apikey);
  const url = 'https://gateway.marvel.com:443/v1/public/characters';
  try {
    const response = await axios.get(url, {
      params: {
        apikey,
        ts,
        hash,
        limit,
        offset,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    throw error;
  }
};
