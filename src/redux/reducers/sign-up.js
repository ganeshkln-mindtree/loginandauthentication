const initial_state = { accountCreated: false, accountCreateFailed: false };
const Signup = (state = initial_state, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return { accountCreated: true };
    case 'USER_CREATION_SUCCESS':
      return { accountCreated: true,accountCreateFailed: false };
    case 'USER_CREATION_FAILED':
      return { accountCreateFailed: true,accountCreated:false };
    default:
      return state;
  }
};

export default Signup;
