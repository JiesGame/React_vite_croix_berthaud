import axios from 'axios';
import Cookies from 'js-cookie';

// const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
const baseURL = import.meta.env.VITE_API_URL;

export const adminArticlesFetch = async (setDataArticles, category) => {
  const fetchURL = `${baseURL}/admin/articles/${category}`;
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
  )
  .then(response => {
    console.log('Response data:', response.data);
    setDataArticles(response.data.reverse());
    return response.data;
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const createArticleFetch = async (data) => {
  const fetchURL = `${baseURL}/articles`;
  const fetchBody = data;
  return axios.post(
    fetchURL, fetchBody ,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
  )
  .then(response => {
    console.log('Response data:', response.data);
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};