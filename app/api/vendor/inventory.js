import axios from 'axios';
import { devURL } from '../../config/server';
import httpClient from '../../services/httpClient';
import httpClientMultiForm from '../../services/httpClientMultiForm';

//========================================================================


// ✅ Add Inventory Item
export const inventoryAdd = async (data) => {
  return httpClientMultiForm.post('/api/v1/vendor/inventory/product', data);
};





// ✅ Fetch Inventory List
export const getInventory = async () => {
  return httpClient.get(`/api/v1/vendor/inventory/product`);
};

// ✅ Fetch Single Inventory Item
export const getInventoryItem = async (itemId) => {
  return httpClient.get(`/api/v1/vendor/inventory/product/${itemId}`);
};

// ✅ Update Inventory Item
export const updateInventory = async (itemId, data) => {
  return httpClient.patch(`/api/v1/vendor/inventory/product/${itemId}`, data);
};

// ✅ Delete Inventory Item (Soft Delete)
export const deleteInventory = async (itemId) => {
  return httpClient.delete(`/api/v1/vendor/inventory/product/${itemId}`);
};

//========================================================================================================
