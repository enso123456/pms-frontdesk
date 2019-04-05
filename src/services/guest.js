import axios from 'axios';

import {
  guestURL
} from '../constant/api';

export const getGuestLists = () => axios.get(guestURL);
