//
// Products API Data Service
// @see https://bezkoder.com/react-crud-web-api/
//
import api from './api';

/**
 * Get all products (dishes) with "promise"
 */
const promiseAll = async (url) => {
  return Promise.all(url);
}

/**
 * Get all products (dishes) from a restaurant's menu
 */
const getAll = () => {
  return api.get('/api/product/list');
};

/**
 * Get a product (dish) by id
 * @param {any} id
 */
const get = id => {
  return api.get(`/products/${id}`);
};

/**
 * Get a product (dish item) by slug
 * @param {string} slug
 */
const getBySlug = slug => {
  return api.get(`/api/product/item/${slug}`);
};

/**
 * Add / Create a new product (dish item) - no auth
 * @param {object} data
 */
const create = data => {
  return api.post('/api/product/store', data);
};

/**
 * Update a product (dish item)
 * @param {any} id
 * @param {object} data
 */
const update = (id, data) => {
  return api.put(`/api/product/update/${id}`, data);
};

/**
 * Delete a product (dish item)
 * @param {any} id
 */
const remove = id => {
  return api.delete(`/products/${id}`);
};

/**
 * Remove all products
 */
const removeAll = () => {
  return api.delete(`/products`);
};

/**
 * Find a product (dish item) by title
 * @param {string} title
 */
const findByTitle = title => {
  return api.get(`/api/product/list/${title}`);
};

/**
 * Get all categories and their related products (if any)
 */
const getCategories = () => {
  return api.get('/api/category/list');
};

/**
 * Get all categories - returns resumed data, only (_id, name and slug)
 * Nice for populating dropdowns and select components
 */
const selectCategories = () => {
  return api.get('/api/category/list/select/');
}

/**
 * Get products (dishes) which belong to a category by slug
 * @param {string} slug
 */
const getByCategory = slug => {
  return api.get(`/api/product/list/category/${slug}`);
};

export default {
  promiseAll,
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  getBySlug,
  getByCategory,
  getCategories,
  selectCategories
};
