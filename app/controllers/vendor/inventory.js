import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { inventoryAdd, getInventory, getInventoryItem, updateInventory, deleteInventory } from '../../api/vendor/inventory';

// ✅ Add Inventory Hook
export const useAddInventory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: inventoryAdd,
    onSuccess: (data) => {
      // console.log('Inventory Added:', data);
      queryClient.invalidateQueries(['inventory']);
    },
    onError: (error) => {
      console.error('Failed to Add Category:', error);
    },
  });

  const addProduct = async (inventoryData) => {
    try {
      const data = await mutation.mutateAsync(inventoryData);
      return { success: true, data };
    } catch (error) {
      // console.log('Inventory error:', error.response.data.message);
      return { success: false, errorMessage: error?.response?.data?.message || 'Failed to add inventory' };
    }
  };

  return {
    addProduct,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,

  };
};

// ✅ Fetch Inventory List Hook
export const useFetchInventory = () => {
  return useQuery({
    queryKey: ['inventory'],
    queryFn: () => getInventory(),
    staleTime: 60000,
    cacheTime: 300000,
    onError: (error) => console.error('Failed to fetch inventory:', error),
  });
};


// ✅ Fetch Single Inventory Item Hook
export const useFetchInventoryItem = (itemId) => {
  const query = useQuery({
    queryKey: ['inventory', itemId], // Ensure query key is specific to the item
    queryFn: () => getInventoryItem(itemId),
    staleTime: 60000,
    cacheTime: 300000,
    onError: (error) => console.error('Failed to fetch inventory:', error),
  });

  return {
    ...query, // Spread the existing query properties
    refetch: query.refetch, // Return refetch function
  };
};

// export const useFetchInventoryItems = (itemId) => {
//   return useQuery(['inventory', itemId], () => getInventoryItem(itemId), {
//     enabled: !!itemId,
//     onError: (error) => console.error('Failed to fetch inventory item:', error),
//   });
// };

// ✅ Update Inventory Hook
export const useUpdateInventory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ itemId, data }) => updateInventory(itemId, data),
    onSuccess: (data) => {
      // console.log('Inventory Updated:', data);
      queryClient.invalidateQueries(['inventory']);
    },
    onError: (error) => {
      console.error('Failed to update inventory:', error);
    },
  });

  const updateProduct = async (itemId, inventoryData) => {
    console.log('inventoryData:', itemId, inventoryData);

    try {
      const data = await mutation.mutateAsync({ itemId, data: inventoryData });
      // return { success: true, data };
      return { success: true, data, successMessage: data?.data?.message };

    } catch (error) {
      return { success: false, error: error.message || 'Failed to update inventory' };
    }
  };

  return {
    updateProduct,
    isPending: mutation.isPending, // Loading state
    isSuccess: mutation.isSuccess, // Success state
    isError: mutation.isError, // Error state
    error: mutation.error, // Error object
  };
};

// ✅ Delete Inventory Hook
export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteInventory,
    onSuccess: (data) => {
      console.log('Inventory Deleted:', data);
      queryClient.invalidateQueries(['inventory']);
    },
    onError: (error) => {
      console.error('Failed to delete inventory:', error);
    },
  });

  const deleteProduct = async (itemId) => {
    try {
      const data = await mutation.mutateAsync(itemId);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete inventory' };
    }
  };

  return {
    deleteProduct,
    isPending: mutation.isPending, // Loading state
    isSuccess: mutation.isSuccess, // Success state
    isError: mutation.isError, // Error state
    error: mutation.error, // Error object
  };
};
