import axios from 'axios';

const apiFetch = async () => {
  try {
    const { apiData } = await axios.get('https://www.superheroapi.com/api.php/10151718746214987/1');
    console.log(apiData);
    return apiData;
  } catch (error) {
    return error;
  }
};

export default apiFetch;
