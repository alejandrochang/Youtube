import axios from 'axios';

const KEY ='AIzaSyDt_zFb5ae1hxYViOP7Ipny0EgaTx33Osc';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
   part: 'snippet',
   maxResults: 10,
   key: KEY
  }
});