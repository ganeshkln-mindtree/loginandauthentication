const initial_state = { loggedIn: false, loginFailed: false };
const Login = (state = initial_state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { loggedIn: true };
    case 'LOGOUT':
      return { loggedIn: false };
    case 'LOGIN_FAILED':
      return { loggedIn: false, loginFailed: true };
    default:
      return state;
  }
};

export default Login;
