import axios from 'axios';
import Cookies from 'js-cookie';
import { toastError, toastInfo, toastSuccess } from './toast';

const baseURL = import.meta.env.VITE_API_URL;

export const createRatingFetch = async (articleID, data) => {
  const fetchURL = `${baseURL}/articles/${articleID}/rating`
  const fetchBody = data
  try {
    const response = await axios.post(
    fetchURL, fetchBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    if (response.status === 208) {
      toastInfo("Vous avez déjà donné une note à cet article.");
    } else if (response.status === 201) {
      toastSuccess("Votre note a été attribuée.")
    } else {
      toastError("La note n'a pas pu être accordée !")
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateRatingFetch = async (articleID, ratingID, data) => {
  const fetchURL = `${baseURL}/articles/${articleID}/rating/${ratingID}`
  const fetchBody = data
  try {
    const response = await axios.put(
    fetchURL, fetchBody, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    if (response.status === 200) {
      toastSuccess("Votre note a été modifiée.");
    } else {
      toastError("La note n'a pas pu être modifiée !");
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};