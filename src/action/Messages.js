import { ADD_MESSAGE, LOAD_MESSAGES_PENDING, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR } from '../constant/ActionTypes';
import axios from 'axios';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  };
};

export function getMessages() {
  return (dispatch) => {
      dispatch({type: LOAD_MESSAGES_PENDING})
      return axios.get("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
          .then(json => {
              dispatch({type: LOAD_MESSAGES_SUCCESS, message: json.data})
          })
          .catch(err => console.log(err));
  }
}