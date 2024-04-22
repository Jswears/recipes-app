import {API_URL, API_URL_DEVICE} from '@env';

import axios from 'axios';
// Create an axios instance with a base URL of the local server running on the Android emulator ( http://localhost:3000  is not accessible from the emulator)
const axiosInstance = axios.create({
  baseURL: API_URL || API_URL_DEVICE,
});

export default axiosInstance;
