import axios from 'axios';
import { devURL } from '../../config/server';
import httpClient from '../../services/httpClient';
//========================================================================
// Fetch all businesses
export const loginVendor = () => httpClient.get('/vendor/auth/login');


//========================================================================================================




