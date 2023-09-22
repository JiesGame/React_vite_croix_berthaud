import axios from 'axios';

// const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
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
    console.log('Response data:', response.data);
    setStripeURL(response.data.url)
    return response.data
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
};