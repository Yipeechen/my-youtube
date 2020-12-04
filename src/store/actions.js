import axios from 'axios';
import * as actionTypes from './actionTypes';

export const searchVideo = term => dispatch => {
  const API_KEY = 'YOUR_API_KEY';
  const URL = 'https://www.googleapis.com/youtube/v3/search';

  axios.get(URL, {
    params: {
      part: 'snippet',
      type: 'video',
      q: term,
      maxResults: 5,
      key: API_KEY,
    }
  })
  .then(res => {
    console.warn(res.data.items);
    dispatch({
      type: actionTypes.SEARCH_VIDEO,
      data: res.data.items,
    });
  })
  .catch(e => {
    console.log(e)
  });
};
