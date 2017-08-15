import axios from 'axios';
import c from './constants';

export function fetchPosts() {
  const request = axios.get(`${c.BLOG_URL}/posts${c.API_KEY}`);

  return {
    type: c.FETCH_POSTS,
    payload: request,
  }
}

export function fetchPost(id) {
  const request = axios.get(`${c.BLOG_URL}/posts/${id}/${c.API_KEY}`);

  return {
    type: c.FETCH_POST,
    payload: request,
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${c.BLOG_URL}/posts${c.API_KEY}`, values)
    .then(() => callback());

  return {
    type: c.CREATE_POST,
    payload: request,
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${c.BLOG_URL}/posts/${id}${c.API_KEY}`)
    .then(() => callback());

  return {
    type: c.DELETE_POST,
    payload: id,
  }
}
