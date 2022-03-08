import axios from 'axios';
import { JUSO_URL } from '../constants/addressPopup';
async function getJusoAPI(keyword) {
  const params = {
    keyword,
    confmKey: process.env.REACT_APP_JUSO_API,
    resultType: 'json',
  };

  try {
    const response = await axios.get(JUSO_URL, { params: params });
    const result = await response.data.results.juso;
    if (result !== null) {
      return result;
    }
  } catch (error) {
    return 'error';
  }
}

export default getJusoAPI;
