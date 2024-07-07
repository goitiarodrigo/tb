import axios from 'axios';
import { EXTERNAL_BASE_URL, TOKEN } from '../../constants.js';

const axiosBase = axios.create({
    baseURL: EXTERNAL_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
    },
});

export default { axiosBase };
