import { GET_POSTS } from '../type/types';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getPosts = () => async (dispatch) => {
  const result = await axios.get(BASE_URL);
  dispatch({
    type: GET_POSTS,
    payload: result.data,
  });
};
