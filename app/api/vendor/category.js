import httpClient from '../../services/httpClient';

//========================================================================


export const categoryAdd = async (data) => {
  return httpClient.post('/api/v1/vendor/inventory/category', data);
};


export const categoryFetch = async () => {
  return httpClient.get('/api/v1/vendor/inventory/category');
};

export const categoryDelete = async (categoryId) => {
  return httpClient.delete(`/api/v1/vendor/inventory/category/${categoryId}`);
};

