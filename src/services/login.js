import axios from 'axios';
import { loginSuccess, loginFailed } from '../redux/actions/login';

export const AuthenticateUser = user => {
  return dispatch => {
    axios
      .post('AuthenticateUser', user)
      .then(response => {
        localStorage.setItem('user', response.data);
        dispatch(loginSuccess(response.data));
      })
      .catch(err => dispatch(loginFailed(err)));
  };
};
