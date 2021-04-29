import axios from 'axios';
import md5 from 'md5';
import moment from 'moment';

const time = moment().format("x")

const hash = md5(time + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: process.env.REACT_APP_PUBLIC_KEY,
    hash
  }
})

export default api;