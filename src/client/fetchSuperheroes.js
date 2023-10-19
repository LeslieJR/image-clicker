import axios from 'axios';
import { generateHash } from './generateHash';

import {DEFAULT_LIMIT, MARVEL_API_ENDPOINT} from '../constants/index'
export const fetchSuperheroes = async (page) => {
  const apikey = import.meta.env.VITE_APP_PUBLIC_KEY ?? '';
  const offset = (page - 1) * DEFAULT_LIMIT;
  const ts = Date.now();
  const hash = generateHash(ts, apikey);
  try {
    const {data} = await axios.get(MARVEL_API_ENDPOINT, {
      params: {
        apikey,
        ts,
        hash,
        limit: DEFAULT_LIMIT,
        offset,
      },
    });
   
    return data.data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    throw error;
  }
};
