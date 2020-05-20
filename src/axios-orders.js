import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-3ad11.firebaseio.com/',
});

export default instance;
