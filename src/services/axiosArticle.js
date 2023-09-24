import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = import.meta.env.VITE_API_URL;

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
    setDataArticles(response.data.reverse())
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const articlesCategoryFetch = async (setDataArticles, category) => {
  const fetchURL = `${baseURL}/articles/category/${category}`;
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then(response => {
    setDataArticles(response.data.reverse());
    return response.data;
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const articlesSearchFetch = async (searchQuery, setSearchData, navigate) => {
  console.log(searchQuery);
  const fetchURL = `${baseURL}/articles_all`;
  try {
    const response = await axios.get(fetchURL, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const filteredData = response.data.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    Cookies.remove('search');
    setSearchData(filteredData.reverse());
    Cookies.set('search', JSON.stringify(filteredData.reverse()))
    location.pathname === "/search" ? window.location.reload() : navigate("/search");
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
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
    setDataArticle(response.data);
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};
