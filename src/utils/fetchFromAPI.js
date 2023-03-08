import axios from "axios";

const  BASE_URL= "https://youtube-v31.p.rapidapi.com"

const options = {
  
  
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '13113705d1msh9dcee7cf44c4953p102512jsn0329fef9255a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};



