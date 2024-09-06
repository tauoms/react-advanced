import axios from "axios";

// Get data using axios

export const getData = async (url) => {
  try {
    const response = await axios.get(`${url}/data`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
