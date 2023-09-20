import axios from 'axios';
import Cookies from 'js-cookie';
import { toastInfo, toastError, toastSuccess } from './toast';

// const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
const baseURL = import.meta.env.VITE_API_URL;

export const usersFetch = async (setUsersData) => {
  const fetchURL = `${baseURL}/users`
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
    setUsersData(response.data)
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const userFetch = async (id, setInfoDeleteUSer) => {
  const fetchURL = `${baseURL}/users/${id}`
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
    setInfoDeleteUSer({id:response.data.id,email:response.data.email})
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const userAdminDeleteFetch = async (id) => {
  const fetchURL = `${baseURL}/admin/user_destroy_by_admin/${id}`
  return axios.delete(
    fetchURL,{
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

export const deleteArticleFetch = async (articleID) => {
  const fetchURL = `${baseURL}/articles/${articleID}`;
  return axios.delete(
    fetchURL,{
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

export const updateArticleFetch = async (data, id) => {
  const fetchURL = `${baseURL}/articles/${id}`;
  const fetchBody = data;
  return axios.put(
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

export const deleteCommentFetch = async (articleID, commentID) => {
  const fetchURL = `${baseURL}/articles/${articleID}/comments/${commentID}`;
  return axios.delete(
    fetchURL,{
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

export const createActivityFetch = async (data, navigate) => {
  const fetchURL = `${baseURL}/activities`;
  const fetchBody = data;
  try {
    const response = await axios.post(
    fetchURL, fetchBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    if (response.status === 201) {
      toastSuccess("L'activité a été créée.");
      navigate('/admin_activities');
    } else if (response.status === 401) {
      toastError("Vous n'êtes pas administrateur.");
    } else {
      toastError("Création impossible.");
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const showActivityFetch = async (id, setDataActivity) => {
  const fetchURL = `${baseURL}/activities/${id}`;
  try {
    const response = await axios.get(
    fetchURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    setDataActivity({name: response.data.name, price: response.data.price,
    period: response.data.period});
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateActivityFetch = async (id, data, navigate) => {
  const fetchURL = `${baseURL}/activities/${id}`;
  const fetchBody = data;
  try {
    const response = await axios.put(
    fetchURL, fetchBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    if (response.status === 200) {
      toastSuccess("L'activité a été mis à jour.");
      navigate('/admin_activities');
    } else if (response.status === 401) {
      toastError("Vous n'êtes pas administrateur.");
    } else {
      toastError("Mise à jour impossible.");
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};