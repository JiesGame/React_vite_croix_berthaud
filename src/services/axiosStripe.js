import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const donationFetch = async (amount, setStripeURL) => {
  const fetchURL = `${baseURL}/checkout/create`
  const fetchBody = amount
  return axios.post(
    fetchURL,fetchBody, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    setStripeURL(response.data.url)
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};

export const inscriptionStripeFetch = async (amount, setStripeURL, member, checkedActivities, userID) => {
  const fetchURL = `${baseURL}/inscription_checkout/create`;
  const fetchBody = {amount, member, checkedActivities, userID};
  return axios.post(
    fetchURL,fetchBody, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  .then(response => {
    setStripeURL(response.data.url);
    return response.data;
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};