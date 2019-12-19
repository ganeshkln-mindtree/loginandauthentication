import { connect } from 'react-redux';
import Signup from '../components/sign-up';
import { createUser } from '../services/sign-up';

const mapStateToProps = state => {
  console.log(state);
  return {
    accountCreated: state.Signup.accountCreated,
    accountCreateFailed: state.Signup.accountCreateFailed,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createUser: data => {
      dispatch(createUser(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
