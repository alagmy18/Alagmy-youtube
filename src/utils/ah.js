const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '13113705d1msh9dcee7cf44c4953p102512jsn0329fef9255a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
