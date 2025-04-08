"use client"
//============================================================================
import { useMutation } from '@tanstack/react-query';
import { loginVendor as loginVendorApi } from '../../api/vendor/auth';
import { useRouter } from "next/navigation";

export const useLoginVendor = () => {
  const router = useRouter();

  // Define mutation
  const mutation = useMutation({
    mutationFn: loginVendorApi,
    onSuccess: (data) => {
      // console.log('loging ',  data?.data?.token);

      localStorage.setItem('token', data?.data?.token);

      // Navigate to dashboard after login
      setTimeout(() => router.push('/dashboard'), 1500);
    },
    onError: (error) => {
      console.error('Login Failed:', error);
    },
  });

  // ✅ New helper function to call login & return response
  const login = async (email, password) => {
    try {
      const data = await mutation.mutateAsync({ email, password });
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message || 'Login failed' };
    }
  };

  // ✅ Optionally add more helper functions
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return {
    login,      // Call this inside `handleLogin`
    logout,     // Future-proofing: Logout function
    ...mutation, // Spread react-query mutation props (status, isLoading, error)
  };
};
