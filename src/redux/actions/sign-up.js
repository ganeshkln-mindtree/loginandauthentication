export const createUser = data => ({
  type: 'CREATE_USER',
  data,
});
export const UserCreationSuccess = () => ({
  type: 'USER_CREATION_SUCCESS',
});
export const UserCreationFailed = () => ({
  type: 'USER_CREATION_FAILED',
});
