import axios from 'axios';

const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
// const baseURL = import.meta.env.VITE_API_URL;

export const articlesFetch = async (setDataArticles) => {
  const fetchURL = `${baseURL}/articles`
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    console.log('Response data:', response.data);
    setDataArticles(response.data.reverse())
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const showArticleFetch = async (id, setDataArticle) => {
  const fetchURL = `${baseURL}/articles/${id}`
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    console.log('Response data:', response.data);
    setDataArticle(response.data);
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};