import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = axios.post('users/signup', credentials);

    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
