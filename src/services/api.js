import axios from 'axios';

let apiURL;

if (process.env.NODE_ENV !== 'production') {
  apiURL = process.env.REACT_APP_BASE_API_URL+':'+process.env.REACT_APP_BASE_API_PORT;
} else {
  apiURL = process.env.REACT_APP_BASE_API_URL;
}

const api = axios.create({
  baseURL: `${apiURL}`,
  headers: {
    "Content-type": "application/json"
  }
});

export default api;
