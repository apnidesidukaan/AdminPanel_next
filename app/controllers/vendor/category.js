import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { categoryAdd, categoryFetch, categoryDelete } from '../../api/vendor/category';
import { useNavigate } from 'react-router-dom';

export const useAddCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: categoryAdd,
    onSuccess: (data) => {
      console.log('Inventory Added:', data);
      queryClient.invalidateQueries(['inventory']);
    },
    onError: (error) => {
      console.error('Failed to Add Category:', error);
    },
  });

  const addCategory = async (inventoryData) => {
    try {
      const data = await mutation.mutateAsync(inventoryData);
      // console.log('successs=================================', data?.data?.message);
      return { success: true, data, successMessage: data?.data?.message };
    } catch (error) {
      console.log('error =================================', error.response?.data);


      return { success: false, error: error?.response?.data?.message || 'Failed to add category' };
    }
  };


  return {
    addCategory,
    isPending: mutation.isPending,
    // isLoading: mutation.isSuccess,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,


    isSuccess: mutation.isSuccess,
  };
};

export const useFetchCategory = () => {
  const queryClient = useQueryClient();

  // Fetch categories using useQuery
  const { data, categoryError, categoryIsLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryFetch,
  });

  // Refetch categories manually if needed
  const refetchCategories = () => {
    queryClient.invalidateQueries(["categories"]);
  };

  return {
    categories: data?.data?.category || [],
    categoryError,
    categoryIsLoading,
    refetchCategories,
  };
};


export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  // Mutation for deleting the category
  const mutation = useMutation({
    mutationFn: categoryDelete,
    onSuccess: (data) => {
      console.log('Category Deleted:', data);
      // Invalidate the categories query to reflect the deletion
      queryClient.invalidateQueries(['categories']);
    },
    onError: (error) => {
      console.error('Failed to Delete Category:', error);
    },
  });

  // Wrapper function to trigger the mutation
  const deleteCategory = async (categoryId) => {
    try {
      const data = await mutation.mutateAsync(categoryId);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message || 'Failed to delete category' };
    }
  };

  return {
    deleteCategory,
    success: mutation.isSuccess,
  };
};