import axios from 'axios';
import { devURL } from '../../config/server';
import httpClient from '../../services/httpClient';
//========================================================================

export const loginVendor = async (credentials) => {
  return httpClient.post('/api/v1/vendor/auth/login', credentials);
};



//========================================================================================================




