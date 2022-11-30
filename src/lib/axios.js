import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.browser
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : process.env.NEXT_PUBLIC_SSR_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

export default axios
