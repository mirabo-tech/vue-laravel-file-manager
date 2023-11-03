import axios from 'axios';
import Cookies from 'js-cookie';

// set new axios instance
export default axios.create({
  withCredentials: true,
  headers: {
    session: Cookies.get('sid'),
  },
});
