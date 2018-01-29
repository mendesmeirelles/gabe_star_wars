import axios from 'axios'
import { baseURL } from './constants';

export const getData = (params) => {
  return axios
    .get(baseURL + params)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
}