import axios from 'axios';

const KEY = 'AIzaSyArBjGmyhLlXw5DZBpsI70s7V_Q8xXTBL4';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{ 
        part:'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});
