/* eslint-disable consistent-return */
import axios from 'axios';

const apiFetch = async () => {
  try {
    const { apiData } = await axios.get('https://www.superheroapi.com/api.php/10151718746214987/1');
    return apiData;
  } catch (error) {
    console.log(error);
  }
};

export default apiFetch;
