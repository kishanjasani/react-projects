import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID e00d7af7c44329e2fbeb85dee59f719b50efcc85040605773e86f945439d5061'
  }
})
