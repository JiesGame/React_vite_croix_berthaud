import axios from 'axios';

const baseURL = "https://api-croix-berthaud-0572b1b3d9d4.herokuapp.com"
// const baseURL = import.meta.env.VITE_API_URL;

export const listActivitiesFetch = async (setDataActivities) => {
  const fetchURL = `${baseURL}/activities`
  try {
    const response = await axios.get(
    fetchURL, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setDataActivities(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};