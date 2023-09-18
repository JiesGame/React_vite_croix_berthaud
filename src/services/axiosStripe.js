import axios from 'axios';

// const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
const baseURL = import.meta.env.VITE_API_URL;

export const donationFetch = async (data) => {
  const fetchURL = `${baseURL}/payment/create`
  return axios.post(
    fetchURL,{
      headers: {
        'Content-Type': 'application/json',
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