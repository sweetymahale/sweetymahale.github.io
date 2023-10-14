import axios from 'axios';
import { FAKE_POPULARS } from './fake_data';
const url = 'https://api.themoviedb.org/3/tv/popular?api_key=0df0069d1dfc92cf0483461bcd1e3249';

export class TVShowAPI {
    static async fetchPopulars() {
        // const res = await axios.get(url)
        console.log(FAKE_POPULARS);
        // return res.data.results;
        return FAKE_POPULARS;
    }
}
