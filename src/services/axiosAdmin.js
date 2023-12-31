import axios from 'axios';
import Cookies from 'js-cookie';
import { toastError, toastSuccess, toastInfo } from './toast';

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
    setInfoDeleteUSer({id:response.data.id,email:response.data.email})
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const usersInscriptionFetch = async (setUsersData) => {
  const fetchURL = `${baseURL}/admin/users_with_unvalidated_activities`
  return axios.get(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
  )
  .then(response => {
    setUsersData(response.data)
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const validateUserInscriptionFetch = async (id) => {
  const fetchURL = `${baseURL}/family_member_activities/${id}`;
  return axios.put(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
  )
  .then(response => {
    if(response.status == 200) {
      toastSuccess("L'inscription a été validée.");
      window.location.reload();
    } else {
      toastError("L'inscription n'a pas pu être validée.");
    }
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const deleteUserInscriptionFetch = async (id) => {
  const fetchURL = `${baseURL}/family_member_activities/${id}`;
  return axios.delete(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    }
  )
  .then(response => {
    if(response.status == 202) {
      toastInfo("L'inscription a été annulée.");
      window.location.reload();
    } else {
      toastError("L'inscription n'a pas pu être annulée.");
    }
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
    return response.data
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