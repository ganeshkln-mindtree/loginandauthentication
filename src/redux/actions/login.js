export const authenticateUser = data => ({
  type: 'AUTHENTICATE_USER',
  data,
});
export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS',
});
export const loginFailed = () => ({
  type: 'LOGIN_FAILED',
});
export const logout = () => ({
  type: 'LOGOUT',
});
