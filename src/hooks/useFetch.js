import useSWR from 'swr';
import api from '../services/api';

/**
 * Default fetcher for swr, imports axios instance from api set up
 * @param {string} url 
 */
const fetcher = url => api.get(url).then(res => res.data); // swr fetcher

/**
 * SWR & Axios Custom Hook for fetching API data
 * @param {string} url 
 * @see: https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
 */
export const useFetch = (url) => {
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error }
};

/**
 * SWR & Axios Custom Hook for fetching API data with swr's data mutation with `mutate`
 * @param {string} url 
 * @see: https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
 */
export const useFetchMutate = (url) => {
  const { data, error, mutate } = useSWR(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error, mutate }
};

/**
 * Fetch a single product swr hook
 */
export const useProduct = (id) => {
  const { data, error, mutate } = useSWR(`/api/product/item/${id}`, fetcher);
  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
};

/**
 * Fetch all products swr hook
 */
export const useProducts = () => {
  const { data, error, mutate } = useSWR(`/api/product/list}`, fetcher);
  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
};

/**
 * Fetch all categories swr hook
 */
export const useCategories = () => {
  const { data, error, mutate } = useSWR('/api/category/list', fetcher);
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
};

/**
 * Get all categories swr hook - returns resumed data, only (_id, name, slug)
 * Nice for populating dropdowns and select components
 */
export const useSelectCategories = () => {
  const { data, error, mutate } = useSWR('/api/category/list/select', fetcher);
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
};
