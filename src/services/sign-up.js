import axios from 'axios';
import {
  UserCreationSuccess,
  UserCreationFailed,
} from '../redux/actions/sign-up';

export const createUser = user => {
  return dispatch => {
    axios
      .post('createUser', user)
      .then(response => dispatch(UserCreationSuccess(response.data)))
      .catch(err => dispatch(UserCreationFailed(err)));
  };
};
