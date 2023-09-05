import axios from 'axios';
import { BASE_URL, GET_OWNED_GAMES } from '../../constant';
import buildQueryParameters from './setupAxios';

export default async (id: string) => {
  if (!id) {
    return null;
  }
  const queryParams = {
    key: '2652E43D80E6D49697D9D00ADED6430B',
    steamid: id,
    format: 'json',
    include_appinfo: true,
    include_played_free_games: true,
  };
  let URL = `${BASE_URL + GET_OWNED_GAMES}`;
  URL = URL.concat(buildQueryParameters(queryParams));
  const result = await axios.get(URL);
  return result.data;
};
