import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
// const baseURL = import.meta.env.VITE_API_URL;

export const commentsFetch = async (articleID, setComments) => {
  const fetchURL = `${baseURL}/articles/${articleID}/comments`
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    console.log('Response data:', response.data);
    setComments(response.data);
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const createCommentFetch = async (articleID, data) => {
  const fetchURL = `${baseURL}/articles/${articleID}/comments`
  const fetchBody = data
  return axios.post(
    fetchURL, fetchBody, {
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