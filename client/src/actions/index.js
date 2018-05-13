import axios from 'axios';

export const GET_DATA_SA = 'GET_DATA_SA';
export const GET_DATA_SCC = 'GET_DATA_SCC';
export const GET_DATA_BBI = 'GET_DATA_BBI';

const URL = '/api/info/SA';
const URL_SCC = '/api/info/SCC';
const URL_BBI = '/api/info/BBI';

export function fetchDataSA() {
  const request = axios.get(URL);

  return {
    type: GET_DATA_SA,
    payload: request
  }
}

export function fetchDataSCC() {
  const request = axios.get(URL_SCC);

  return {
    type: GET_DATA_SCC,
    payload: request
  }
}

export function fetchDataBBI() {
  const request = axios.get(URL_BBI);

  return {
    type: GET_DATA_BBI,
    payload: request
  }
}